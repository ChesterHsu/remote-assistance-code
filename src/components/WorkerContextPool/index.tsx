import React, { createContext, useRef } from 'react';

interface PoolWorker {
  name: string;
  isIdle: boolean;
  __worker: Worker;
  code: string;
  timeout: number;
  result: any;
}
const noop = () => {};
export const WorkerPoolContext = createContext<{
  requestWorker(name: string, code: string, timeout?: number): void | string;
  releaseWorker(workerId: string): void | boolean;
  getResult(workerId: string): void | Promise<any>;
  run(workerId: string, ...args: any): void;
}>({
  requestWorker: noop,
  releaseWorker: noop,
  getResult: noop,
  run: noop
});

/**
 * <WorkerPool><Component /></WorkerPool>
 * const { requestWorker } = useContext(WorkerPoolContext)
 * useEffect()
 */
const WorkerPool = ({ children }: { children: React.ReactElement }) => {
  const pool = useRef<{
    [k: string]: PoolWorker;
  }>({});

  const _createBlobObjectURL = (code: string) => {
    const blob = new Blob([`${code}`], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    return url;
  };

  const _createWorker = (url: string) => {
    const worker = new Worker(url);
    return worker;
  };

  const _initWorker = (name: string, code: string, timeout: number) => {
    const blobObjectUrl = _createBlobObjectURL(code);
    const worker = _createWorker(blobObjectUrl);
    return {
      /**
       * Private Worker
       */
      __worker: worker,
      name: name,
      isIdle: true,
      code,
      timeout: timeout || 10e3,
      result: null
    } as PoolWorker;
  };

  const _createPool = (name: string, code: string, timeout: number) => {
    const initWorker = _initWorker(name, code, timeout);
    Object.assign(pool.current, {
      [initWorker.name]: initWorker
    });
    return initWorker.name;
  };

  const handlePoolRun = (workerId: string, args: any) => {
    let currentWorker = pool.current[workerId];
    if (!currentWorker) {
      console.warn(`workerId "${workerId}" is not existed.`);
    } else {
      currentWorker.isIdle = false;
      currentWorker.__worker.postMessage(args);
      currentWorker.result = new Promise((resolve, reject) => {
        let timeId: NodeJS.Timeout;
        const errorHandle = (e: ErrorEvent) => {
          reject({
            isError: true,
            filename: e.filename,
            lineno: e.lineno,
            message: e.message
          });
        };
        const messageEvent = (e: any) => {
          currentWorker.__worker.removeEventListener('message', messageEvent);
          currentWorker.__worker.removeEventListener('error', errorHandle);
          if (timeId) clearTimeout(timeId);
          currentWorker.isIdle = true;
          resolve(e.data);
        };
        timeId = setTimeout(() => {
          currentWorker.__worker.removeEventListener('message', messageEvent);
          currentWorker.__worker.removeEventListener('error', errorHandle);
          currentWorker.isIdle = true;
          resolve(null);
        }, currentWorker.timeout);
        currentWorker.__worker.addEventListener('message', messageEvent);
        currentWorker.__worker.addEventListener('error', errorHandle);
      });
    }
  };

  const requestWorker = (name: string, code: string, timeout: number) => {
    if (pool.current[name]) {
      console.error(`[Worker Pool] worker named '${name}' is duplicated.`);
    } else {
      _createPool(name, code, timeout);
    }
  };

  const releaseWorker = (workerId: string) => {
    if (!pool.current[workerId]) {
      return false;
    }
    pool.current[workerId].__worker.terminate();
    delete pool.current[workerId];
    return true;
  };

  const getResult = (workerId: string) => {
    if (!pool.current[workerId]) {
      console.warn(`workerId "${workerId}" is not existed.`);
    } else {
      return pool.current[workerId].result;
    }
  };

  return (
    <WorkerPoolContext.Provider
      value={{
        requestWorker,
        releaseWorker,
        getResult,
        run: handlePoolRun
      }}
    >
      {children}
    </WorkerPoolContext.Provider>
  );
};

export default WorkerPool;
