import { useEffect, useState } from "react";
import { fetcher } from "../../../utils/fetcher";
import Table from "../../../components/common/Table/Table";
import Textfield from "../../../components/common//Textfield/Textfield";
import styles from "./TodoTable.module.css";
import Checkbox from "../../common/Checkbox/Checkbox";
import useDebounce from "../../../hooks/useDebounce";

const TodoTable: React.FC = () => {
    const [tableData, setTableData] = useState([]);
    const [isInitialized, setIsInitialized] = useState(false);
    // userIDで検索
    const [userIDFilter, setUserIDFilter] = useState("");
    // 検索条件の遅延評価(300ms)
    const debouncedQuery = useDebounce(userIDFilter, 300);
    // 完了済表示切り替え
    const [showCompleted, setShowCompleted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const handleChangeUserIDFilter = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setUserIDFilter(e.target.value);
    };

    const handleChangeShowCompleted = (checked: boolean) => {
        setShowCompleted(checked);
    };

    const fetchTableData = () => {
        // feach https://jsonplaceholder.typicode.com/todos?completed=true&userId=1
        const URL = "https://jsonplaceholder.typicode.com/todos";
        let url = URL;
        if (userIDFilter) {
            // userIdを検索条件に追加
            url += `?userId=${userIDFilter}`;
        }
        if (showCompleted) {
            // 完了済含め全て表示
            // nop
        } else {
            // 完了済を検索条件に追加
            url += userIDFilter ? "&" : "?";
            url += `completed=false`;
        }

        setLoading(true);
        fetcher(url, {})
            .then((res) => {
                console.log("get result:", res);
                setTableData(res);
            })
            .catch((err) => {
                console.error("get error:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    // NOTE 初回1回だけ実行
    useEffect(() => {
        fetchTableData();
        setIsInitialized(true);
    }, []);

    // 検索条件によるフィルタ
    // NOTE 入力後300ms後に検索
    useEffect(() => {
        if (isInitialized) {
            console.log(`Searching for: ${debouncedQuery}`);
            fetchTableData();
        }
    }, [debouncedQuery]);

    useEffect(() => {
        if (isInitialized) {
            fetchTableData();
        }
    }, [showCompleted]);

    return (
        <div>
            <h1>Table Example</h1>
            {/* フィルタ */}
            <div className={styles["filter-container"]}>
                <div className={styles["filter-item"]}>
                    <Textfield
                        label="userID"
                        value={userIDFilter}
                        type="number"
                        onChange={handleChangeUserIDFilter}
                    ></Textfield>
                    <Checkbox
                        checked={showCompleted}
                        onChange={handleChangeShowCompleted}
                        label="完了済を表示"
                    ></Checkbox>
                </div>
            </div>
            <Table data={tableData} loading={loading} />
        </div>
    );
};

export default TodoTable;
