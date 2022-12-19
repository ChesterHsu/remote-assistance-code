import { Tabs, TabContent } from "@/components/Tabs";
import { TabsProps, TabContentProps } from "@/components/Tabs/js/interface";
import { ProjectTabProps } from "@/components/Tabs/ProjectTab/js/interface";



function ProjectTab(props: ProjectTabProps) {

    function Content() {
        return(
            <>
                {Object.entries(props).map(([key, projectTab]) => {

                    const onHover = (e) => {
                    }

                    // 傳入TabContent所需參數合併
                    const tabContentProps = Object.assign(projectTab, onHover)

                    return(
                        <div key={`${key}`}>
                            <TabContent
                                {...tabContentProps as TabContentProps}
                            />
                        </div>
                    )
                })}
            </>
        )
    }

    const tabProps = {
        TabChildren: Content
    } as unknown as  TabsProps

    return(
        <>
            <Tabs {...tabProps}/>
        </>

    )
}

export default ProjectTab
