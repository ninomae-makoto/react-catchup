import { useState } from "react";
import "./App.css";
import Header from "./components/layout/Header/Header";
import Form from "./components/layout/Form/Form";
import Loader from "./components/common/Loader/Loader";
import TabMenu from "./components/layout/TabMenu/TabMenu";
import Spacer from "./components/common/Spacer/Spacer";
import FormIcon from "./components/icons/FormIcon";
import TableIcon from "./components/icons/TableIcon";
import ModalIcon from "./components/icons/ModalIcon";
import EtcIcon from "./components/icons/EtcIcon";
import TodoTable from "./components/layout/TodoTable/TodoTable";
import ModalView from "./components/layout/ModalView/ModalView";
import FileView from "./components/layout/FileView/FileView";

function App() {
    // NOTE: Reactで管理する変数。useState()で可変項目を管理する
    const [loading, setLoading] = useState(false);

    // NOTE: Reactのイベントハンドラは、イベントオブジェクトを引数に取る。このサンプルにおいてコンポーネントのイベントハンドラはhandleXxxxで統一する。
    const handleLoadingChange = (isLoading: boolean) => {
        setLoading(isLoading);
    };

    // タブコンポーネントの設定
    const TABS = [
        { label: "Form", Icon: FormIcon },
        { label: "Table", Icon: TableIcon },
        { label: "Modal", Icon: ModalIcon },
        { label: "File", Icon: EtcIcon },
    ];
    const [currentTab, setCurrentTab] = useState("Form");
    const handleTabClick = (tab: string): void => {
        setCurrentTab(tab);
    };
    // タブ切り替えに合わせて表示するコンポーネントを変更
    const renderContent = () => {
        switch (currentTab) {
            case "Form":
                return <Form onLoadingChange={handleLoadingChange} />;
            case "Table":
                return <TodoTable />;
            case "Modal":
                return <ModalView />;
            case "File":
                return <FileView />;
            default:
                return null;
        }
    };

    return (
        //<> </>で囲んだHTMLを返す
        <>
            {loading && <Loader>Loading...</Loader>}
            <Header>Hello React</Header>
            <TabMenu
                tabs={TABS}
                defaultTab={TABS[0].label}
                onTabClick={handleTabClick}
            ></TabMenu>
            <Spacer size={16} />
            {renderContent()}
        </>
    );
}

export default App;
