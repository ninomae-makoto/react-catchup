React+α キャッチアップ

# VSCode 拡張機能

- Prettier


# Reactで書いたコードを動かすには


- Next.js(Pages Router)
- Next.js(App Router)
- Remix
- Remix(SPAモード)
- React + Vite(バンドラー)
- Gatsby
- Astro

今からやるなら
Next.js(App Router)
React + Vite(バンドラー)
のいずれか

サーバとフロントの実装者が兼任する場合などシンプルにやるならReact + Vite.
高度な画面機能があり処理を画面に寄せる場合、専任のフロントエンジニアが多い場合はNext.js.

# React Hooks

- useState: 状態管理(可変の項目、変数を管理する)
- useEffect: 副作用(データのフェッチ等)処理
- useContext: コンポーネント間のデータの受け渡し。グローバルな状態(テーマ、認証情報、設定情報など)を管理するとき。
- useReducer: 複雑な状態管理
- useMemo: 値(計算結果)のメモ化
- useCallback: 関数のメモ化
- useRef: DOM要素の参照
- useImperativeHandle: 親コンポーネントから子コンポーネントの関数を呼び出す
- カスタムHooks

## 副作用とは

- Reactの外から影響を受ける、あるいは外に影響を与える処理
- 通信、ブラウザのイベント、タイマー処理、ローカルストレージの操作など
- 開発中は安全でない副作用を検知するため2回呼び出される。何度呼ばれても同じ結果になるようにコンポーネントを作成することでよりクリーンなコードになる。

## メモ化とは

- メモ化とは、計算結果をキャッシュして再計算を省略すること

## カスタムフック

- useForm: フォームの入力状態等を一元管理する
- useFetch: 通信時のデータ、通信中、エラー等を一元管理する
- useDebounce: 入力後にバリデーションや検索を実行
- useLocal(Session)Storage: ローカルストレージ管理


# アイコンについて

- SVGファイルをそのまま読み込む。
- SVGをコンポーネント化する。

## SVGファイルをそのまま読み込む。

遅延読み込みが可能。
キャッシュが効く。

## SVGをコンポーネント化する

色やサイズ、エフェクトなどインタラクティブ性がある。
同じ画面に複数表示する場合その分パフォーマンスに影響する。

ロゴなど不変の画像を表示する場合 → Imgタグ
ボタンアイコンなどインタラクティブ性を持たせたい場合 → コンポーネント化

# 余白について

コンポーネントでサイズだとかは明示しない
コンポーネント使う側がサイズ等を指定する
サイズ、マージン、パッディング

- コンポーネント自体にマージンを持たせる △
- コンポーネントをdivで囲ってclassを指定する
- Spacerコンポーネントを用意する

※ボタンAとボタンBに固有のマージンを持たせた場合組み合わせによっては予期しないレイアウトになることがある。

# 共通処理を用意する場合クラスではなく関数群を用意する

最適化を考えるとクラスよりも関数を分けて用意した方が良い。

# CSS Modulesについて

CSS Modulesは、CSSファイルをモジュール化して、クラス名の衝突を防ぐ仕組み

- 共通cssを用途に合わせて1つ、2つ用意する
- 各コンポーネントのスタイルにはCSS Modulesを使う

# ファイルの処理について

- ファイルの添付は、S3などを使用してファイルアップロード用のURLを発行するのがトレンド。
- ファイル処理のコストをWebサーバから分離することで、Webサーバの負荷を軽減する。
- 処理は若干煩雑になる。

# スタイルの適用方法

## CSS Modules

- CSS Modulesは、CSSファイルをモジュール化して、クラス名の衝突を防ぐ仕組み
- CSS Modulesを使うと、クラス名が自動的にユニークな名前に変換される
- 非推奨になりそうでならなそう
- サンプルではこちらを使用

## CSS in JS

- CSS in JSは、JavaScriptの中にCSSを記述する方法
- CSS in JSは、コンポーネント指向のスタイルを実現するための手法
- どれも一長一短

大きく２つ派閥がある（と思われる）

- フレームとデザインを分離する
- フレームとデザイン等をコンポーネント単位でまとめてしまう


# コンポーネントの設計

コンポーネントで作ることはわかった。誰が何をやる？
テキストフィールドにバリデーション機能を持たせればいいのでは？
親からエラー状態が判別できない。できなくはないが複雑になる。
複合条件に対応できない。
→ 親コンポーネントにてバリデーションを行う

リフトアップと呼ばれる手法


# その他


# 参考

https://speakerdeck.com/azukiazusa1/react-huremuwakuno-dong-xiang-toxuan-ding-ji-zhun

