import React from "react";

export default function ICABreadcumb({ title, subtitle }) {
  return (
    <div
      className="breadcumb-wrapper"
      style={{
        background: "#111",
        padding: "180px 0 80px",
      }}
    >
      <div className="container">
        <div className="breadcumb-content text-center">
          {subtitle && (
            <span style={{ color: "#999", fontSize: 14, textTransform: "uppercase", letterSpacing: 3, display: "block", marginBottom: 12 }}>
              {subtitle}
            </span>
          )}
          <h1 className="breadcumb-title" style={{ color: "#fff", fontSize: 48, fontWeight: 600, margin: 0 }}>
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
