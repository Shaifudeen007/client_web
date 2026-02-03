import { useEffect, useRef, useState } from "react";

/* Tell TypeScript Leaflet exists */
declare global {
  interface Window {
    L: any;
  }
}

const collegesWithCoords = [
   { name: "Presidency University", location: "Bengaluru", lat: 13.1067, lng: 77.5815 },
  { name: "St. Joseph's College of Engineering", location: "Chennai", lat: 12.9097, lng: 80.1067 },
  { name: "Saveetha University", location: "Chennai", lat: 13.0524, lng: 80.0175 },
  { name: "Sree Sastha Institute of Engineering and Technology", location: "Kanchipuram", lat: 12.8342, lng: 79.7036 },
  { name: "IFET College of Engineering", location: "Villupuram", lat: 11.9401, lng: 79.4861 },
  { name: "Manakula Vinayagar Institute of Technology", location: "Puducherry", lat: 11.9416, lng: 79.8083 },
  { name: "Sri Manakula Vinayagar Engineering College", location: "Puducherry", lat: 11.9416, lng: 79.8083 },
  { name: "Sri Venkateshwaraa College of Engineering and Technology", location: "Puducherry", lat: 11.9139, lng: 79.812 },
  { name: "Rajiv Gandhi College of Engineering and Technology", location: "Puducherry", lat: 11.92, lng: 79.77 },
  { name: "R. P. Sarathy Institute of Technology", location: "Puducherry", lat: 11.9, lng: 79.8 },
  { name: "Bannari Amman Institute of Technology", location: "Erode", lat: 11.5059, lng: 77.2383 },
  { name: "Erode Sengunthar Engineering College", location: "Erode", lat: 11.333, lng: 77.727 },
  { name: "Velalar College of Engineering and Technology", location: "Erode", lat: 11.34, lng: 77.7172 },
  { name: "Kongu Engineering College", location: "Erode", lat: 11.2778, lng: 77.601 },
  { name: "Nandha Engineering College", location: "Erode", lat: 11.35, lng: 77.72 },
  { name: "Muthayammal Engineering College", location: "Namakkal", lat: 11.4451, lng: 78.2259 },
  { name: "Paavai Engineering College", location: "Namakkal", lat: 11.3385, lng: 78.182 },
  { name: "K.S.R. College of Engineering", location: "Namakkal", lat: 11.366, lng: 78.166 },
  { name: "M. Kumaraswamy College of Engineering", location: "Karur", lat: 10.9577, lng: 78.08 },
  { name: "Chettinad College of Engineering & Technology", location: "Karur", lat: 10.9605, lng: 78.0765 },
  { name: "VSB Engineering College", location: "Karur", lat: 10.97, lng: 78.07 },
  { name: "K. Ramakrishnan College of Engineering", location: "Tiruchirappalli", lat: 10.7905, lng: 78.7047 },
  { name: "SRM TRP Engineering College", location: "Tiruchirappalli", lat: 10.786, lng: 78.6995 },
  { name: "Dhanalakshmi Srinivasan College of Engineering and Technology", location: "Tiruchirappalli", lat: 10.707, lng: 78.81 },
  { name: "KPR Institute of Engineering and Technology", location: "Coimbatore", lat: 10.9252, lng: 76.9884 },
  { name: "Karpagam Institute of Technology", location: "Coimbatore", lat: 10.888, lng: 76.989 },
  { name: "Hindusthan Institute of Technology", location: "Coimbatore", lat: 10.8976, lng: 77.015 },
  { name: "Kamaraj College of Engineering & Technology", location: "Virudhunagar", lat: 9.51, lng: 77.61 },
  { name: "Kalasalingam University", location: "Virudhunagar", lat: 9.45, lng: 77.65 },
  { name: "St. Jerome's College", location: "Kanyakumari", lat: 8.0883, lng: 77.5385 },
  { name: "Pioneer Kumaraswamy College", location: "Kanyakumari", lat: 8.18, lng: 77.434 },
  { name: "Muslim Arts College", location: "Kanyakumari", lat: 8.1785, lng: 77.432 },
  { name: "Noorul Islam College", location: "Kanyakumari", lat: 8.251, lng: 77.305 },
  { name: "Nesamony Memorial Christian College", location: "Kanyakumari", lat: 8.177, lng: 77.4345 },
  { name: "Nanjil Catholic College of Arts and Science", location: "Kanyakumari", lat: 8.189, lng: 77.41 },
  { name: "Malankara Catholic College", location: "Kanyakumari", lat: 8.176, lng: 77.4325 },
  { name: "Arignar Anna College", location: "Kanyakumari", lat: 8.17, lng: 77.44 },
  { name: "Rajeev Gandhi Memorial College of Engineering and Technology", location: "Andhra Pradesh", lat: 15.8281, lng: 78.0373 },
  { name: "E.G.S. Pillay Engineering College", location: "Nagapattinam", lat: 10.766, lng: 79.8428 },
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
