type FetchOptions = {
    /** HTTPメソッド */
    method?: "GET" | "POST" | "PUT" | "DELETE";
    /** リクエストボディ */
    body?: Object | FormData;
    /** 認証トークン */
    token?: string;
    /** コンテンツタイプ */
    contentType?: "application/json" | "application/x-www-form-urlencoded";
};

/**
 * 通信処理を行うfetcher関数
 * @param url エンドポイント
 * @param options オプション
 * @returns JSON形式のレスポンスデータ
 */
export const fetcher = async (url: string, options: FetchOptions = {}) => {
    const init: RequestInit = {
        method: options.method || "GET",
        headers: {
            "Content-Type": options.contentType || "application/json",
            Authorization: options.token ? `Bearer ${options.token}` : "",
        },
        body: options.body ? JSON.stringify(options.body) : undefined,
    };
    const response = await fetch(url, init);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};
