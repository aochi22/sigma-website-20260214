"use client";

import React from "react";

interface DataEngineeringVisualProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function DataEngineeringVisual({
  width = 800,
  height = 500,
  className = "",
}: DataEngineeringVisualProps) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] overflow-hidden ${className}`}>
      {/* Grid background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#58a6ff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Flow lines */}
      <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#f7c948" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#48bb78" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="flowGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#48bb78" stopOpacity="0.8" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Data flow arrows - curved paths */}
        {/* Sources to Spark/Databricks */}
        <path d="M 80 120 C 160 120, 200 200, 300 200" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 80 200 C 160 200, 200 200, 300 210" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.8s" repeatCount="indefinite" />
        </path>
        <path d="M 80 280 C 160 280, 200 220, 300 220" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M 80 360 C 160 360, 200 230, 300 230" fill="none" stroke="url(#flowGrad1)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.6s" repeatCount="indefinite" />
        </path>

        {/* Spark/Databricks to outputs */}
        <path d="M 500 200 C 560 200, 580 140, 660 140" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2s" repeatCount="indefinite" />
        </path>
        <path d="M 500 210 C 560 210, 580 220, 660 220" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.8s" repeatCount="indefinite" />
        </path>
        <path d="M 500 220 C 560 220, 580 300, 660 300" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="2.2s" repeatCount="indefinite" />
        </path>
        <path d="M 500 230 C 560 230, 580 380, 660 380" fill="none" stroke="url(#flowGrad2)" strokeWidth="2" strokeDasharray="6 4" opacity="0.7">
          <animate attributeName="stroke-dashoffset" from="20" to="0" dur="1.6s" repeatCount="indefinite" />
        </path>

        {/* Animated dots on paths */}
        <circle r="3" fill="#f7c948" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 80 120 C 160 120, 200 200, 300 200" />
        </circle>
        <circle r="3" fill="#48bb78" filter="url(#glow)">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 80 280 C 160 280, 200 220, 300 220" />
        </circle>
        <circle r="3" fill="#667eea" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 500 200 C 560 200, 580 140, 660 140" />
        </circle>
        <circle r="3" fill="#48bb78" filter="url(#glow)">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 500 220 C 560 220, 580 300, 660 300" />
        </circle>
      </svg>

      {/* Source nodes (left) */}
      <div className="absolute left-4 top-[85px] flex flex-col gap-5">
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#f7c948] animate-pulse" />
          <span className="text-[11px] font-mono text-[#c9d1d9]">API Streams</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#48bb78] animate-pulse" />
          <span className="text-[11px] font-mono text-[#c9d1d9]">Databases</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#58a6ff] animate-pulse" />
          <span className="text-[11px] font-mono text-[#c9d1d9]">Files / S3</span>
        </div>
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#ff6b35] animate-pulse" />
          <span className="text-[11px] font-mono text-[#c9d1d9]">Kafka / Events</span>
        </div>
      </div>

      {/* Central Processing Block */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px]">
        {/* Databricks */}
        <div className="bg-gradient-to-br from-[#ff3621]/20 to-[#ff3621]/5 border border-[#ff3621]/40 rounded-lg p-3 mb-3 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7.5V16.5L12 22L22 16.5V7.5L12 2Z" fill="#FF3621" opacity="0.8" />
              <path d="M12 7L7 9.75V15.25L12 18L17 15.25V9.75L12 7Z" fill="#FF3621" />
            </svg>
            <span className="text-[12px] font-bold text-[#ff6b55] tracking-wide">DATABRICKS</span>
          </div>
          <span className="text-[9px] font-mono text-[#8b949e]">Lakehouse Platform</span>
        </div>

        {/* Apache Spark */}
        <div className="bg-gradient-to-br from-[#e25a1c]/20 to-[#e25a1c]/5 border border-[#e25a1c]/40 rounded-lg p-3 mb-3 backdrop-blur-sm">
          <div className="flex items-center gap-2 mb-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L14 8L20 6L16 12L22 14L16 16L18 22L12 18L6 22L8 16L2 14L8 12L4 6L10 8L12 2Z" fill="#E25A1C" />
            </svg>
            <span className="text-[12px] font-bold text-[#e8825a] tracking-wide">APACHE SPARK</span>
          </div>
          <span className="text-[9px] font-mono text-[#8b949e]">Distributed Processing</span>
        </div>

        {/* Language badges */}
        <div className="flex gap-2 mt-2">
          <div className="bg-[#306998]/20 border border-[#306998]/50 rounded px-2.5 py-1.5 flex items-center gap-1.5">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 2C6.48 2 2 4.02 2 6.5V17.5C2 19.98 6.48 22 12 22C17.52 22 22 19.98 22 17.5V6.5C22 4.02 17.52 2 12 2Z" fill="#306998" opacity="0.6" />
              <text x="7" y="16" fill="#FFD43B" fontSize="10" fontWeight="bold">Py</text>
            </svg>
            <span className="text-[10px] font-bold text-[#4B8BBE]">Python</span>
          </div>
          <div className="bg-[#DC322F]/20 border border-[#DC322F]/50 rounded px-2.5 py-1.5 flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#DC322F]">Scala</span>
          </div>
          <div className="bg-[#58a6ff]/20 border border-[#58a6ff]/50 rounded px-2.5 py-1.5 flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-[#58a6ff]">SQL</span>
          </div>
        </div>
      </div>

      {/* Output nodes (right) */}
      <div className="absolute right-4 top-[100px] flex flex-col gap-5">
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <span className="text-[11px] font-mono text-[#c9d1d9]">Data Lake</span>
          <div className="w-2 h-2 rounded-full bg-[#667eea]" />
        </div>
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <span className="text-[11px] font-mono text-[#c9d1d9]">Warehouse</span>
          <div className="w-2 h-2 rounded-full bg-[#48bb78]" />
        </div>
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <span className="text-[11px] font-mono text-[#c9d1d9]">ML Models</span>
          <div className="w-2 h-2 rounded-full bg-[#f7c948]" />
        </div>
        <div className="flex items-center gap-2 bg-[#1a2332]/80 border border-[#30363d] rounded-md px-3 py-2 backdrop-blur-sm">
          <span className="text-[11px] font-mono text-[#c9d1d9]">Dashboards</span>
          <div className="w-2 h-2 rounded-full bg-[#ff6b35]" />
        </div>
      </div>

      {/* Bottom tech bar */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-[#0d1117]/90 border border-[#30363d] rounded-full px-4 py-1.5 backdrop-blur-sm">
        <span className="text-[9px] font-mono text-[#8b949e] uppercase tracking-wider">ETL</span>
        <span className="text-[#30363d]">|</span>
        <span className="text-[9px] font-mono text-[#8b949e] uppercase tracking-wider">Delta Lake</span>
        <span className="text-[#30363d]">|</span>
        <span className="text-[9px] font-mono text-[#8b949e] uppercase tracking-wider">Airflow</span>
        <span className="text-[#30363d]">|</span>
        <span className="text-[9px] font-mono text-[#8b949e] uppercase tracking-wider">dbt</span>
        <span className="text-[#30363d]">|</span>
        <span className="text-[9px] font-mono text-[#8b949e] uppercase tracking-wider">PySpark</span>
      </div>

      {/* Top label */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-[#0d1117]/90 border border-[#30363d] rounded-full px-4 py-1 backdrop-blur-sm">
        <span className="text-[10px] font-mono text-[#58a6ff] uppercase tracking-[0.15em]">Data Engineering Pipeline</span>
      </div>
    </div>
  );
}
