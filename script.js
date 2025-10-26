const API_BASE = 'https://api.open-meteo.com/v1/forecast';

const PROVINCES = [
  {name: "Hà Nội", lat: 21.0278, lon: 105.8342},
  {name: "TP. Hồ Chí Minh", lat: 10.8231, lon: 106.6297},
  {name: "Hải Phòng", lat: 20.8449, lon: 106.6881},
  {name: "Đà Nẵng", lat: 16.0544, lon: 108.2022},
  {name: "Cần Thơ", lat: 10.0452, lon: 105.7469},
  {name: "An Giang", lat: 10.5400, lon: 105.3669},
  {name: "Bà Rịa - Vũng Tàu", lat: 10.5547, lon: 107.2319},
  {name: "Bắc Giang", lat: 21.2750, lon: 106.1988},
  {name: "Bắc Kạn", lat: 22.1436, lon: 105.8355},
  {name: "Bạc Liêu", lat: 9.2868, lon: 105.7280},
  {name: "Bắc Ninh", lat: 21.1869, lon: 106.0718},
  {name: "Bến Tre", lat: 10.2361, lon: 106.3759},
  {name: "Bình Định (Quy Nhơn)", lat: 13.7824, lon: 109.2191},
  {name: "Bình Dương", lat: 11.1428, lon: 106.0285},
  {name: "Bình Phước", lat: 11.8376, lon: 106.7997},
  {name: "Bình Thuận (Phan Thiết)", lat: 10.9333, lon: 108.1000},
  {name: "Cà Mau", lat: 9.1766, lon: 105.1520},
  {name: "Cao Bằng", lat: 22.6667, lon: 106.2500},
  {name: "Đắk Lắk (Buôn Ma Thuột)", lat: 12.6666, lon: 108.0500},
  {name: "Đắk Nông", lat: 12.2500, lon: 107.7500},
  {name: "Điện Biên", lat: 21.3865, lon: 103.0255},
  {name: "Đồng Nai", lat: 10.9460, lon: 106.8241},
  {name: "Đồng Tháp", lat: 10.6663, lon: 105.6968},
  {name: "Gia Lai (Pleiku)", lat: 13.9833, lon: 108.0000},
  {name: "Hà Giang", lat: 22.7698, lon: 104.9797},
  {name: "Hà Nam", lat: 20.5730, lon: 105.9236},
  {name: "Hà Tĩnh", lat: 18.3426, lon: 105.9053},
  {name: "Hòa Bình", lat: 20.8199, lon: 105.3370},
  {name: "Hưng Yên", lat: 20.8679, lon: 106.0082},
  {name: "Khánh Hòa (Nha Trang)", lat: 12.2388, lon: 109.1967},
  {name: "Kiên Giang (Rạch Giá)", lat: 10.0129, lon: 105.1037},
  {name: "Kon Tum", lat: 14.3520, lon: 107.9772},
  {name: "Lai Châu", lat: 22.3833, lon: 103.3333},
  {name: "Lâm Đồng (Đà Lạt)", lat: 11.9404, lon: 108.4583},
  {name: "Lạng Sơn", lat: 21.8484, lon: 106.7591},
  {name: "Lào Cai", lat: 22.4976, lon: 103.9941},
  {name: "Long An", lat: 10.6950, lon: 106.2518},
  {name: "Nam Định", lat: 20.4240, lon: 106.1645},
  {name: "Nghệ An (Vinh)", lat: 18.6714, lon: 105.7000},
  {name: "Ninh Bình", lat: 20.2500, lon: 105.9800},
  {name: "Ninh Thuận (Phan Rang)", lat: 11.5621, lon: 108.9985},
  {name: "Phú Thọ", lat: 21.3135, lon: 105.2529},
  {name: "Phú Yên", lat: 13.0953, lon: 109.3200},
  {name: "Quảng Bình", lat: 17.4750, lon: 106.2750},
  {name: "Quảng Nam", lat: 15.5691, lon: 108.4891},
  {name: "Quảng Ngãi", lat: 15.1217, lon: 108.7969},
  {name: "Quảng Ninh (Hạ Long)", lat: 20.9600, lon: 107.0456},
  {name: "Quảng Trị", lat: 16.7478, lon: 107.1827},
  {name: "Sóc Trăng", lat: 9.6008, lon: 105.9773},
  {name: "Sơn La", lat: 21.3250, lon: 103.9040},
  {name: "Tây Ninh", lat: 11.3333, lon: 106.1000},
  {name: "Thái Bình", lat: 20.4535, lon: 106.3386},
  {name: "Thái Nguyên", lat: 21.5923, lon: 105.8482},
  {name: "Thanh Hóa", lat: 19.8067, lon: 105.7821},
  {name: "Thừa Thiên - Huế", lat: 16.4637, lon: 107.5909},
  {name: "Tiền Giang (Mỹ Tho)", lat: 10.3573, lon: 106.3596},
  {name: "Trà Vinh", lat: 9.9349, lon: 106.3559},
  {name: "Tuyên Quang", lat: 21.8234, lon: 105.2170},
  {name: "Vĩnh Long", lat: 10.2500, lon: 105.9649},
  {name: "Vĩnh Phúc", lat: 21.3087, lon: 105.5790},
  {name: "Yên Bái", lat: 21.7088, lon: 104.8656}
];

const citiesList = document.getElementById('citiesList');
const searchInput = document.getElementById('searchInput');
const locateBtn = document.getElementById('locateBtn');
const unitToggle = document.getElementById('unitToggle');

const cityNameEl = document.getElementById('cityName');
const descEl = document.getElementById('desc');
const tempEl = document.getElementById('temp');
const feelsEl = document.getElementById('feels');
const humidityEl = document.getElementById('humidity');
const windEl = document.getElementById('wind');
const iconEl = document.getElementById('icon');
const updatedEl = document.getElementById('updated');
const aqiBox = document.getElementById('aqiBox');
const forecastEl = document.getElementById('forecast');

let isCelsius = true;
let activeIndex = 0;
let lastData = null;

function c2f(c){ return (c * 9/5) + 32; }
function f2c(f){ return (f - 32) * 5/9; }
function deg2rad(d){ return d * Math.PI / 180; }
function distanceKm(lat1, lon1, lat2, lon2){
  const R = 6371;
  const dLat = deg2rad(lat2-lat1);
  const dLon = deg2rad(lon2-lon1);
  const a = Math.sin(dLat/2)*Math.sin(dLat/2) + Math.cos(deg2rad(lat1))*Math.cos(deg2rad(lat2))*Math.sin(dLon/2)*Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

function renderCityList(indices){
  citiesList.innerHTML = '';
  indices.forEach((idx) => {
    const p = PROVINCES[idx];
    const div = document.createElement('div');
    div.className = 'city-item' + (idx === activeIndex ? ' active' : '');
    div.dataset.index = idx;
    div.innerHTML = `<div>${p.name}</div><div class="small">${p.lat.toFixed(2)}, ${p.lon.toFixed(2)}</div>`;
    div.addEventListener('click', () => {
      setActiveCity(idx);
      loadWeatherForProvince(p, idx);
    });
    citiesList.appendChild(div);
  });
}

function setActiveCity(index){
  activeIndex = index;
  Array.from(citiesList.children).forEach(child => {
    child.classList.toggle('active', Number(child.dataset.index) === index);
  });
}

const ALL_INDICES = PROVINCES.map((_, i) => i);
renderCityList(ALL_INDICES);

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  const matched = [];
  for (let i = 0; i < PROVINCES.length; i++) {
    if (!q || PROVINCES[i].name.toLowerCase().includes(q)) matched.push(i);
  }
  renderCityList(matched.length ? matched : ALL_INDICES);
  const visible = matched.length ? matched : ALL_INDICES;
  if (!visible.includes(activeIndex)) {
    setActiveCity(visible[0]);
  } else {
    setActiveCity(activeIndex);
  }
});

unitToggle.addEventListener('click', () => {
  isCelsius = !isCelsius;
  unitToggle.innerText = isCelsius ? '°C' : '°F';
  if (lastData) displayWeather(lastData.name, lastData.data, lastData.provinceIndex);
});

locateBtn.addEventListener('click', () => {
  if (!navigator.geolocation) { alert('Trình duyệt không hỗ trợ Geolocation'); return; }
  navigator.geolocation.getCurrentPosition(pos => {
    const {latitude, longitude} = pos.coords;
    let best = 0, bestd = Number.MAX_VALUE;
    for (let i = 0; i < PROVINCES.length; i++){
      const p = PROVINCES[i];
      const d = distanceKm(latitude, longitude, p.lat, p.lon);
      if (d < bestd){ bestd = d; best = i; }
    }
    setActiveCity(best);
    loadWeatherForProvince(PROVINCES[best], best);
  }, err => alert('Không thể lấy vị trí: ' + err.message));
});

async function loadWeatherForProvince(province, provinceIndex){
  try {
    showLoading(true);
    const url = `${API_BASE}?latitude=${province.lat}&longitude=${province.lon}&current_weather=true&hourly=relativehumidity_2m,temperature_2m&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=7`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('Không thể lấy dữ liệu thời tiết (HTTP ' + res.status + ')');
    const data = await res.json();
    lastData = {name: province.name, data, provinceIndex: provinceIndex};
    displayWeather(province.name, data, provinceIndex);
  } catch (e) {
    console.error(e);
    alert('Lỗi khi lấy dữ liệu thời tiết: ' + (e.message || e));
  } finally {
    showLoading(false);
  }
}

function displayWeather(name, data, provinceIndex = null){
  try {
    const cur = data.current_weather;
    if (!cur) throw new Error('Dữ liệu current_weather không tồn tại');

    const wc = weatherCodeToText(cur.weathercode);
    cityNameEl.innerText = name;
    descEl.innerText = wc.text;
    iconEl.textContent = wc.icon;

    const tempRaw = cur.temperature;
    const tempVal = isCelsius ? tempRaw : c2f(tempRaw);
    tempEl.innerText = `${Math.round(tempVal)}°${isCelsius ? 'C' : 'F'}`;

    feelsEl.innerText = Math.round(tempVal) + '°';

    let humidity = '--';
    try {
      const times = (data.hourly && data.hourly.time) || [];
      const hums = (data.hourly && data.hourly.relativehumidity_2m) || [];
      if (times.length && hums.length && times.length === hums.length) {
        const curMs = new Date(cur.time).getTime();
        let nearestIdx = 0;
        let minDiff = Infinity;
        for (let i = 0; i < times.length; i++){
          const tMs = new Date(times[i]).getTime();
          const diff = Math.abs(tMs - curMs);
          if (diff < minDiff){ minDiff = diff; nearestIdx = i; }
        }
        const rawHum = hums[nearestIdx];
        if (rawHum !== undefined && rawHum !== null) humidity = Math.round(rawHum);
      }
    } catch (e) {
      humidity = '--';
    }
    humidityEl.innerText = humidity === '--' ? '--' : humidity;

    windEl.innerText = (cur.windspeed !== undefined ? cur.windspeed : '--');

    try {
      const dt = new Date(cur.time);
      updatedEl.innerText = 'Cập nhật: ' + dt.toLocaleString('vi-VN');
    } catch { updatedEl.innerText = 'Cập nhật: ' + cur.time; }

    const aqi = estimateAQI(name);
    renderAQI(aqi);

    if (data.daily && Array.isArray(data.daily.time)) {
      renderForecast(data.daily);
      const labels = data.daily.time;
      const maxs = (data.daily.temperature_2m_max || []).map(v => isCelsius ? v : c2f(v));
      const mins = (data.daily.temperature_2m_min || []).map(v => isCelsius ? v : c2f(v));
      if (typeof drawTempChart === 'function') {
        drawTempChart(labels, maxs, mins, isCelsius);
      } else if (window.drawTempChart) {
        window.drawTempChart(labels, maxs, mins, isCelsius);
      }
    } else {
      forecastEl.innerHTML = '<div class="day card">Không có dự báo</div>';
    }

    updateTheme(cur.weathercode, cur.is_day);

    if (typeof provinceIndex === 'number') setActiveCity(provinceIndex);
  } catch (err) {
    console.error('displayWeather error', err);
    alert('Lỗi hiển thị dữ liệu: ' + (err.message || err));
  }
}

function renderForecast(daily){
  forecastEl.innerHTML = '';
  const days = daily.time || [];
  const maxArr = daily.temperature_2m_max || [];
  const minArr = daily.temperature_2m_min || [];
  const codeArr = daily.weathercode || [];
  for (let i = 0; i < days.length; i++){
    const d = days[i];
    const max = maxArr[i] !== undefined ? (isCelsius ? Math.round(maxArr[i]) : Math.round(c2f(maxArr[i]))) : '--';
    const min = minArr[i] !== undefined ? (isCelsius ? Math.round(minArr[i]) : Math.round(c2f(minArr[i]))) : '--';
    const code = codeArr[i] !== undefined ? codeArr[i] : null;
    const dayName = new Date(d).toLocaleDateString('vi-VN', {weekday:'short', day:'numeric'});
    const icon = code !== null ? weatherCodeToText(code).icon : '❓';
    const div = document.createElement('div');
    div.className = 'day card';
    div.innerHTML = `<div class="d">${dayName}</div><div class="ic" style="font-size:28px">${icon}</div><div>${max}° / ${min}°</div>`;
    forecastEl.appendChild(div);
  }
}

function weatherCodeToText(code){
  const m = {
    0:['Trời quang','☀️'],
    1:['Ít mây','🌤️'],
    2:['Có mây','⛅'],
    3:['Mây dày','☁️'],
    45:['Sương mù','🌫️'],
    48:['Sương mù đặc','🌫️'],
    51:['Mưa phùn nhẹ','🌦️'],
    53:['Mưa phùn vừa','🌦️'],
    55:['Mưa phùn dày','🌧️'],
    61:['Mưa nhỏ','🌧️'],
    63:['Mưa vừa','🌧️'],
    65:['Mưa to','⛈️'],
    71:['Tuyết nhẹ','🌨️'],
    73:['Tuyết vừa','🌨️'],
    75:['Tuyết to','❄️'],
    80:['Mưa rào','🌧️'],
    81:['Mưa rào nặng','🌧️'],
    95:['Dông bão','⛈️'],
    96:['Dông (mưa đá nhẹ)','⛈️'],
    99:['Dông mạnh','⛈️']
  };
  return m[code] ? {text: m[code][0], icon: m[code][1]} : {text:'Không xác định', icon:'❓'};
}

function estimateAQI(name){
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  const val = 10 + (h % 171); 
  let cat = 'Tốt';
  if (val <= 50) cat = 'Tốt';
  else if (val <= 100) cat = 'Trung bình';
  else if (val <= 150) cat = 'Kém';
  else cat = 'Xấu';
  return {value: val, category: cat};
}
function renderAQI(aqi){
  aqiBox.innerText = `AQI — ${aqi.value} (${aqi.category})`;
  aqiBox.style.background = aqiBG(aqi.value);
  aqiBox.style.color = (aqi.value>150) ? '#fff' : '#072033';
}
function aqiBG(v){
  if (v <= 50) return 'linear-gradient(90deg,#e6fff0,#d4fff0)';
  if (v <= 100) return 'linear-gradient(90deg,#fffbe6,#fff0c2)';
  if (v <= 150) return 'linear-gradient(90deg,#fff0e6,#ffd4c2)';
  return 'linear-gradient(90deg,#ffd2d2,#ffb4b4)';
}

function updateTheme(code, is_day){
  const body = document.body;
  if (!is_day) {
    body.style.background = 'linear-gradient(#071124,#021124)';
    body.style.color = '#dfeff6';
  } else if ([61,63,65,80,81,95,96,99].includes(code)) {
    body.style.background = 'linear-gradient(#9fd2ec,#e6f6ff)';
    body.style.color = '#072033';
  } else if ([71,73,75].includes(code)) {
    body.style.background = 'linear-gradient(#cfe8ff,#f3faff)';
    body.style.color = '#072033';
  } else {
    body.style.background = 'linear-gradient(#a7d8ff,#ffffff)';
    body.style.color = '#072033';
  }
}

function showLoading(loading){
  if (loading) {
    tempEl.innerText = '—';
    descEl.innerText = 'Đang tải...';
    humidityEl.innerText = '--';
    windEl.innerText = '--';
  }
}

setActiveCity(0);
renderCityList(ALL_INDICES);
loadWeatherForProvince(PROVINCES[0], 0);

