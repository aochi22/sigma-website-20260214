"use client";

import React from "react";
import DataEngineeringVisual from "@/components/data-engineering-visual";

export default function DataEngineeringPage() {
  return (
    <main className="bg-[#0d1117] min-h-screen text-white">
      {/* Hero with DataEngineeringVisual */}
      <section className="relative w-full h-[70vh] min-h-[500px]">
        <DataEngineeringVisual className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full container mx-auto px-10 xl:px-20 pb-16">
          <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#58a6ff] mb-4">
            Data Engineering
          </span>
          <h1 className="text-4xl md:text-6xl font-normal tracking-tight max-w-3xl leading-[1.1] mb-6">
            Build Robust Data Pipelines at Scale
          </h1>
          <p className="text-[#8b949e] text-lg max-w-2xl leading-relaxed">
            Design, build, and maintain the data infrastructure that powers your organization. 
            From real-time streaming to batch processing, we engineer solutions that scale.
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-10 xl:px-20 py-24">
        <h2 className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#58a6ff] mb-12">
          Technology Stack
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { name: "Databricks", color: "#FF3621" },
            { name: "Apache Spark", color: "#E25A1C" },
            { name: "Python", color: "#306998" },
            { name: "Scala", color: "#DC322F" },
            { name: "Apache Kafka", color: "#231F20" },
            { name: "Airflow", color: "#017CEE" },
            { name: "dbt", color: "#FF694B" },
            { name: "Delta Lake", color: "#00ADD4" },
            { name: "PySpark", color: "#E25A1C" },
            { name: "AWS S3", color: "#FF9900" },
            { name: "Snowflake", color: "#29B5E8" },
            { name: "SQL", color: "#58a6ff" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex items-center gap-3 hover:border-[#58a6ff]/50 transition-colors"
            >
              <div
                className="w-3 h-3 rounded-full shrink-0"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-[13px] font-mono text-[#c9d1d9]">{tech.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="container mx-auto px-10 xl:px-20 py-24 border-t border-[#21262d]">
        <h2 className="text-[12px] font-medium uppercase tracking-[0.15em] text-[#58a6ff] mb-12">
          Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "ETL / ELT Pipelines",
              desc: "Extract, transform, and load data from hundreds of sources with reliable, monitored pipelines using Airflow, dbt, and Spark.",
            },
            {
              title: "Real-Time Streaming",
              desc: "Process millions of events per second with Apache Kafka and Spark Structured Streaming for real-time analytics.",
            },
            {
              title: "Data Lakehouse",
              desc: "Combine the best of data lakes and warehouses with Delta Lake on Databricks for unified analytics.",
            },
            {
              title: "Data Quality & Governance",
              desc: "Implement data quality checks, lineage tracking, and governance frameworks to ensure data reliability.",
            },
            {
              title: "Cloud Infrastructure",
              desc: "Design and deploy scalable data infrastructure on AWS, Azure, or GCP with infrastructure-as-code.",
            },
            {
              title: "Performance Optimization",
              desc: "Tune Spark jobs, optimize query performance, and reduce compute costs with efficient data partitioning.",
            },
          ].map((cap) => (
            <div
              key={cap.title}
              className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#58a6ff]/30 transition-colors"
            >
              <h3 className="text-[16px] font-medium text-white mb-3">{cap.title}</h3>
              <p className="text-[14px] leading-relaxed text-[#8b949e]">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-10 xl:px-20 py-24 border-t border-[#21262d]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
              Ready to build your data platform?
            </h2>
            <p className="text-[#8b949e] text-lg max-w-xl">
              Let our team of data engineers design and implement the infrastructure your business needs.
            </p>
          </div>
          <a
            href="/contact"
            className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 text-[14px] font-medium uppercase tracking-[0.1em] hover:bg-[#79b8ff] transition-colors shrink-0"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
}
