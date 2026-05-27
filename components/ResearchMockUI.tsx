export default function ResearchMockUI() {
  return (
    <div className="mock-stack">
      <div className="mock-card browser-bar">
        <div className="dots"><span></span><span></span><span></span></div>
        <div className="search-pill">おすすめ ノートパソコン</div>
      </div>
      <div className="mock-card tabs">
        <div className="tab-row">
          <span className="tab">比較</span>
          <span className="tab">レビュー</span>
          <span className="tab">ランキング</span>
        </div>
        <div className="table-mock">
          <div><span></span><span>A社</span><span>B社</span><span>C社</span></div>
          <div><span>価格</span><span>◯</span><span>△</span><span>◯</span></div>
          <div><span>性能</span><span>△</span><span>◯</span><span>◯</span></div>
          <div><span>重さ</span><span>◯</span><span>△</span><span>◯</span></div>
        </div>
      </div>
      <div className="mock-card saved">
        <h4>保存した記事</h4>
        <ul>
          <li>後悔しない選び方のポイント</li>
          <li>ユーザーの口コミまとめ</li>
          <li>気になることリスト</li>
        </ul>
      </div>
      <div className="sticky">もっと調べた方がいい？</div>
    </div>
  );
}
