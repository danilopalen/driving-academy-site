"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import centralcbd from "../../public/images/centralcbd.png";
import centraleast from "../../public/images/centraleast.png";
import centralwest from "../../public/images/centralwest.png";
import eastauckland from "../../public/images/eastauckland.png";
import { X } from "lucide-react";

const AREAS = [
  {
    region: "Auckland Central West",
    days: "Monday and Tuesday",
    notes: "",
    mapPlaceholder: centralwest,
  },
  {
    region: "Auckland Central East",
    days: "Thursday and Friday",
    notes: "",
    mapPlaceholder: centraleast,
  },
  {
    region: "Auckland Central & CBD",
    days: "Wednesday",
    notes: "Class 1 only",
    mapPlaceholder: centralcbd,
  },
  {
    region: "East Auckland",
    days: "Saturday and Sunday",
    notes: "",
    mapPlaceholder: eastauckland,
  },
];
const AreaCoverageDialog = ({ isOpen, onClose, onContinue }) => {
  const pathname = usePathname();
  const [areas, setAreas] = useState([]);
  const [selected, setSelected] = useState("");
  if (!isOpen) return null;

  useEffect(() => {
    if (pathname.includes("class1") || pathname.includes("book")) {
      setAreas(AREAS);
    } else {
      setAreas(AREAS.filter(({ notes }) => notes !== "Class 1 only"));
    }
  }, [pathname]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <header className="modal-header">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Area Coverage Information</h2>
            <X onClick={onClose} style={{ cursor: "pointer" }} />
          </div>
          <p>
            Before making a booking, please review the service areas, the
            available dates, and select the location for the lesson.
          </p>
        </header>

        <div className="areas-grid">
          {areas.map((area, index) => (
            <div
              key={index}
              className="area-card"
              onClick={() => setSelected(area.region)}
              style={{
                border: area?.region === selected ? "1px solid #2563eb" : "",
              }}
            >
              <div className="area-header">
                <h3>{area.region}</h3>
                <p className="availability">Available: {area.days}</p>
                {area.notes && <p className="note">{area.notes}</p>}
              </div>
              <div className="area-content">
                <Image
                  src={area.mapPlaceholder}
                  alt={`Map of ${area.region}`}
                  className="area-map"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          ))}
        </div>

        <footer className="modal-footer">
          <button onClick={onClose} className="button button-secondary">
            Close
          </button>

          <button
            disabled={!selected ? true : false}
            onClick={() => onContinue(selected)}
            className={
              !selected ? "button button-disabled" : "button button-primary"
            }
          >
            Continue to Booking
          </button>
        </footer>
      </div>

      <style>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 8px;
          width: 90%;
          max-width: 1200px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 24px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .modal-header {
          margin-bottom: 24px;
        }

        .modal-header h2 {
          font-size: 24px;
          margin: 0 0 8px 0;
        }

        .modal-header p {
          font-size: 16px;
          color: #666;
          margin: 0;
        }

        .areas-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
          gap: 24px;
          margin-bottom: 24px;
        }

        .area-card {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          background: white;
          cursor: pointer;
          transition: all 0.3s;
        }
        .area-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
        }

        .area-header {
          padding: 16px;
          border-bottom: 1px solid #e0e0e0;
        }

        .area-header h3 {
          margin: 0 0 8px 0;
          font-size: 18px;
        }

        .availability {
          font-size: 14px;
          color: #666;
          margin: 0;
          font-weight: 700;
        }

        .note {
          font-size: 14px;
          color: #e65100;
          margin: 8px 0 0 0;
          font-weight: 500;
        }

        .area-content {
          padding: 16px;
        }

        .area-map {
          width: 100%;
          border-radius: 4px;
          border: 1px solid #e0e0e0;
          object-fit: contain;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid #e0e0e0;
        }

        .button {
          padding: 8px 16px;
          border-radius: 4px;
          font-size: 14px;
          cursor: pointer;
          border: none;
          font-weight: 500;
          transition: background-color 0.2s;
        }

        .button-secondary {
          background-color: #f5f5f5;
          color: #333;
        }
        .button-disabled {
          backgroundColor: #cccccc;
          color: #fff;
          cursor: not-allowed !important
        }
        .button-secondary:hover {
          background-color: #e0e0e0;
        }

        .button-primary {
          background-color: #1976d2;
          color: white;
        }

        .button-primary:hover {
          background-color: #1565c0;
        }

        @media (max-width: 768px) {
          .modal-content {
            padding: 16px;
          }

          .areas-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default AreaCoverageDialog;
