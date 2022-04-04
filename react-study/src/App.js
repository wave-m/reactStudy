import { useState, useEffect } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 여기서 []로 초기화 하지 많으면 undefined가 되어 버림 주의하자
  const [money, setMoney] = useState(0.0);
  const [result, setResult] = useState(0.0);
  const [usd, setUsd] = useState(0.0);
  const onChange = (event) => setMoney(usd / Number(event.target.value));
  const onTyping = (event) => setUsd(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
    
    setResult(usd / money);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
    setMoney();
  }, []);
  
  return (
    <div>
      <h1>The Coin! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null }
      <form onSubmit={onSubmit}>
        <input
          onChange={onTyping}
          value={usd}
          type="text"
          placeholder="보유 USD"
        />
      </form>
      <select onChange={onChange}>
        {/* index는 key 설정을 위해 필요 */}
        <option value="0" style={{ color: "#ccc" }}> ---옵션선택--- </option>
        {coins.map((item, index) => 
          <option key={index} value={item.quotes.USD.price}>{item.name} {item.symbol} {item.quotes.USD.price} USD</option>)
        }
      </select>
      {isNaN(result) ? 0 : result} BTC 구매 가능
    </div>
  );
}

export default App;
