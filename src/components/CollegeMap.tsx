import { useEffect, useRef, useState } from "react";

/* Tell TypeScript Leaflet exists */
declare global {
  interface Window {
    L: any;
  }
}

const collegesWithCoords = [
  
  { name: "Presidency University", location: "Itgalpur, Bengaluru", lat: 13.171998965120649, lng: 77.53608439325345 },
  { name: "St. Joseph's College of Engineering", location: "Semmancheri, Chennai", lat: 12.870117051476585, lng: 80.21854521229045 },
  { name: "Saveetha University", location: "Thandalam, Chennai", lat: 13.027820930292764, lng: 80.01557520674442 },
  { name: "Sree Sastha Institute of Engineering and Technology", location: "Chembarambakkam, Chennai", lat: 13.03786248030042, lng: 80.05385531044347 },
  { name: "IFET College of Engineering", location: "Gangarampalayam, Villupuram", lat: 11.920959334903703, lng: 79.6107211662493 },
  { name: "Manakula Vinayagar Institute of Technology", location: "Kalitheerthalkuppam, Puducherry", lat: 11.922841646437965, lng: 79.62690536624936 },
  { name: "Sri Manakula Vinayagar Engineering College", location: "Madagadipet, Puducherry", lat: 11.914880339845823, lng: 79.63450669508487 },
  { name: "Sri Venkateshwaraa College of Engineering and Technology", location: "Ariyur, Puducherry", lat: 11.901999943086688, lng: 79.70326635275603 },
  { name: "Rajiv Gandhi College of Engineering and Technology", location: "Kirumampakkam, Puducherry", lat: 11.827925305045007, lng: 79.78271583926193 },
  { name: "R. P. Sarathy Institute of Technology", location: "Poovampatti, Salem", lat: 11.840236500327629, lng: 78.05951798159077 },
  { name: "Bannari Amman Institute of Technology", location: "Sathyamangalam, Erode", lat: 11.49726491410343, lng: 77.27695219138045 },
  { name: "Erode Sengunthar Engineering College", location: "Thudupathi, Erode", lat: 11.31327939815542, lng: 77.55053991041962 },
  { name: "Velalar College of Engineering and Technology", location: "Thindal, Erode", lat: 11.323803288604964, lng: 77.67415315089899 },
  { name: "Kongu Engineering College", location: "Perundurai, Erode", lat: 11.27429036456074, lng: 77.60485908452651 },
  { name: "Nandha Engineering College", location: "Vaikkaalmedu, Erode", lat: 11.286217987970256, lng: 77.62106031041925 },
  { name: "Muthayammal Engineering College", location: "Rasipuram, Namakkal", lat: 11.445055814294506, lng: 78.2260387085718 },
  { name: "Paavai Engineering College", location: "Pachal, Namakkal", lat: 11.400620128874802, lng: 78.16188173925634 },
  { name: "K.S.R. College of Engineering", location: "Tiruchengode, Namakkal", lat: 11.358911306565677, lng: 77.82696299692714 },
  { name: "M. Kumaraswamy College of Engineering", location: "Thalavapalayam, Karur", lat: 11.054491805320476, lng: 78.04849518271456 },
  { name: "Chettinad College of Engineering & Technology", location: "Puliyur, Karur", lat: 10.939513603915543, lng: 78.13576610671612 },
  { name: "VSB Engineering College", location: "Manmangalam, Karur", lat: 10.957004987548912, lng: 77.95514151041525 },
  { name: "K. Ramakrishnan College of Engineering", location: "Samayapuram, Tiruchirappalli", lat: 10.92925163434775, lng: 78.73814929452556 },
  { name: "SRM TRP Engineering College", location: "Irungalur, Tiruchirappalli", lat: 10.95244392438197, lng: 78.75159722020935 },
  { name: "Dhanalakshmi Srinivasan College of Engineering and Technology", location: "Samayapuram, Tiruchirappalli", lat: 10.930399218820224, lng: 78.74642482075583 },
  { name: "KPR Institute of Engineering and Technology", location: "Arasur, Coimbatore", lat: 11.076700526466709, lng: 77.14192213555344 },
  { name: "Karpagam Institute of Technology", location: "Eachanari, Coimbatore", lat: 10.908439783885532, lng: 76.97853710856522 },
  { name: "Hindusthan Institute of Technology", location: "Othakkalmandapam, Coimbatore", lat: 11.032064949937903, lng: 76.9970670043656 },
  { name: "Kamaraj College of Engineering & Technology", location: "Madurai-Virudhunagar Border", lat: 9.673077398004613, lng: 77.965727093209 },
  { name: "Kalasalingam University", location: "Krishnankoil, Virudhunagar", lat: 9.574969674879794, lng: 77.67985661039998 },
  { name: "St. Jerome's College", location: "Anandhanadarkudy, Kanyakumari", lat: 8.147252823525797, lng: 77.38004679319519 },
  { name: "Pioneer Kumaraswamy College", location: "Nagercoil, Kanyakumari", lat: 8.189571558135231, lng: 77.41100462203117 },
  { name: "Muslim Arts College", location: "Thiruvithancode, Kanyakumari", lat: 8.2568337795751, lng: 77.29759514901787 },
  { name: "Noorul Islam College", location: "Kumaracoil, Kanyakumari", lat: 8.253357709432606, lng: 77.34504857576525 },
  { name: "Nesamony Memorial Christian College", location: "Marthandam, Kanyakumari", lat: 8.308361048946853, lng: 77.22119130853909 },
  { name: "Nanjil Catholic College of Arts and Science", location: "Kaliyakkavilai, Kanyakumari", lat: 8.338068046006708, lng: 77.17048427600474 },
  { name: "Malankara Catholic College", location: "Mariagiri, Kanyakumari", lat: 8.322803856177032, lng: 77.16503654901838 },
  { name: "Arignar Anna College", location: "Aramboly, Kanyakumari", lat: 8.25106279179252, lng: 77.52637589504553 },
  { name: "Rajeev Gandhi Memorial College of Engineering and Technology", location: "Nandyal, Andhra Pradesh", lat: 15.50553941395682, lng: 78.37709752212872 },
  { name: "E.G.S. Pillay Engineering College", location: "Nagapattinam", lat: 10.803901546659842, lng: 79.83326369507088 },

];




const CollegeMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    /* Leaflet CSS */
    const leafletCSS = document.createElement("link");
    leafletCSS.rel = "stylesheet";
    leafletCSS.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(leafletCSS);

    /* Material Symbols */
    const materialIcons = document.createElement("link");
    materialIcons.rel = "stylesheet";
    materialIcons.href =
      "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,500,1,0";
    document.head.appendChild(materialIcons);

    /* Leaflet JS */
    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";

    script.onload = () => {
      const L = window.L;
      if (!mapRef.current || !L) return;

      const map = L.map(mapRef.current, {
        center: [11.1271, 78.6569],
        zoom: 7,
      });

      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      ).addTo(map);

      const locationIcon = L.divIcon({
        className: "",
        html: `
          <span class="material-symbols-outlined flat-location">
            location_on
          </span>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -24],
      });

      collegesWithCoords.forEach((c) => {
        L.marker([c.lat, c.lng], { icon: locationIcon })
          .addTo(map)
          .bindPopup(`
            <div class="map-popup">
              <div class="map-title">${c.name}</div>
              <div class="map-location">${c.location}</div>
            </div>
          `);
      });

      setMapLoaded(true);
    };

    document.body.appendChild(script);

    return () => {
      if (mapRef.current) mapRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative flex justify-center">
      <style>{`
        .leaflet-container {
          background: #0a0a0a;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* FLAT PINK ICON (NO GLOW) */
        .flat-location {
          font-size: 28px;
          color: #ff2bf1;
          line-height: 1;
        }

        .map-popup {
          background: linear-gradient(145deg, #14141c, #0d0d12);
          padding: 12px 16px;
          border-radius: 14px;
          border: 1px solid rgba(232, 28, 255, 0.3);
        }

        .map-title {
          color: #e81cff;
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 4px;
        }

        .map-location {
          font-size: 12px;
          color: rgba(255,255,255,0.7);
        }

        .leaflet-popup-content-wrapper {
          background: transparent;
          box-shadow: none;
        }

        .leaflet-popup-tip {
          background: #14141c;
          border: 1px solid rgba(232, 28, 255, 0.3);
        }
      `}</style>

      <div className="relative w-full max-w-6xl rounded-3xl p-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 blur-3xl opacity-40" />

        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          <div ref={mapRef} className="w-full h-[500px]" />
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm text-white">
              Loading map...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CollegeMap;
