import React from 'react';
import {
  UploadProps,
  UploadProgressEvent,
  UploadRequestError,
  UploadRequestOption,
  BeforeUploadFileType,
  RcFile,
  ParsedFileInfo
} from '@/components/UploadInput/js/interface';
import defaultRequest from './request';
import attrAccept from './attr-accept';
import getUid from './uid';
import { setUid } from '@/store/slice/upload';

export class UploadMethod {
  private readonly props: UploadProps = {};

  reqs: any = {};

  private fileInput: HTMLInputElement | null = null;

  private _isMounted: boolean = true;

  constructor(props: UploadMethod) {
    this.props = props;
  }

  saveFileInput = (node: HTMLInputElement) => {
    this.fileInput = node;
  };

  post({ data, origin, action, parsedFile }: ParsedFileInfo) {
    if (!this._isMounted) {
      return;
    }

    const { onStart, customRequest, name, headers, withCredentials, method } = this.props;

    const { uid } = origin;
    const request = customRequest || defaultRequest;

    const requestOption = {
      action,
      filename: name,
      data,
      file: parsedFile,
      headers,
      withCredentials,
      method: method || 'post',
      onProgress: (e: UploadProgressEvent) => {
        const { onProgress } = this.props;
        onProgress?.(e, parsedFile);
      },
      onSuccess: (ret: any, xhr: XMLHttpRequest) => {
        const { onSuccess } = this.props;
        onSuccess?.(ret, parsedFile, xhr);

        delete this.reqs[uid];
      },
      onError: (err: UploadRequestError, ret: any) => {
        const { onError } = this.props;
        onError?.(err, ret, parsedFile);

        delete this.reqs[uid];
      }
    };

    if (onStart) {
      onStart(origin);
    }

    this.reqs[uid] = request(requestOption as UploadRequestOption);
  }

  processFile = async (
    file: RcFile,
    fileList: RcFile[]
  ): Promise<{
    parsedFile: RcFile | null;
    data: Record<string, unknown> | null;
    origin: RcFile;
    action: string | null;
  }> => {
    const { beforeUpload } = this.props;

    let transformedFile: BeforeUploadFileType | void = file;
    if (beforeUpload) {
      try {
        transformedFile = await beforeUpload(file, fileList);
      } catch (e) {
        // Rejection will also trade as false
        transformedFile = false;
      }
      if (transformedFile === false) {
        return {
          origin: file,
          parsedFile: null,
          action: null,
          data: null
        };
      }
    }

    // Get latest action
    const { action } = this.props;
    let mergedAction: string | undefined;

    if (typeof action === 'function') {
      mergedAction = await action(file);
    } else {
      mergedAction = action;
    }

    // Get latest data
    const { data } = this.props;
    let mergedData: Record<string, unknown>;
    if (typeof data === 'function') {
      mergedData = await data(file);
    } else {
      mergedData = data as Record<string, unknown>;
    }

    const parsedData =
      // string type is from legacy `transformFile`.
      // Not sure if this will work since no related test case works with it
      (typeof transformedFile === 'object' || typeof transformedFile === 'string') && transformedFile
        ? transformedFile
        : file;

    let parsedFile: File;
    if (parsedData instanceof File) {
      parsedFile = parsedData;
    } else {
      parsedFile = new File([parsedData], file.name, { type: file.type });
    }

    const mergedParsedFile: RcFile = parsedFile as RcFile;
    mergedParsedFile.uid = file.uid;

    return {
      origin: file,
      data: mergedData,
      parsedFile: mergedParsedFile,
      action: mergedAction as string
    };
  };

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { accept, directory } = this.props;
    const { files } = e.target;
    const acceptedFiles = [...(files as any)].filter(
      (file: RcFile) => !directory || attrAccept(file, accept as string | string[])
    );

    this.uploadFiles(acceptedFiles);
    this.reset();
  };

  uploadFiles = (files: File[]) => {
    const originFiles = [...files] as RcFile[];
    const postFiles = originFiles.map((file: RcFile & { uid?: string }) => {
      file.uid = getUid();
      return this.processFile(file, originFiles);
    });

    // Batch js files
    Promise.all(postFiles).then((fileList) => {
      const { onBatchStart } = this.props;

      onBatchStart?.(fileList.map(({ origin, parsedFile }) => ({ file: origin, parsedFile })));

      fileList
        .filter((file) => file.parsedFile !== null)
        .forEach((file) => {
          this.post(file as ParsedFileInfo);
        });
    });
  };

  reset() {
    setUid(getUid());
  }
}
