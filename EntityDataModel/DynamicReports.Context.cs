﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace EntityDataModel
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class DynamicReportsDBEntities : DbContext
    {
        public DynamicReportsDBEntities()
            : base("name=DynamicReportsDBEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<ClientSetting> ClientSettings { get; set; }
        public virtual DbSet<Deployment> Deployments { get; set; }
        public virtual DbSet<DynamicReport> DynamicReports { get; set; }
        public virtual DbSet<DynamicReportHistory> DynamicReportHistories { get; set; }
        public virtual DbSet<DynamicReportHistoryDetail> DynamicReportHistoryDetails { get; set; }
        public virtual DbSet<DynamicReportHistoryDetailType> DynamicReportHistoryDetailTypes { get; set; }
        public virtual DbSet<DynamicReportHistoryType> DynamicReportHistoryTypes { get; set; }
        public virtual DbSet<DynamicReportMetric> DynamicReportMetrics { get; set; }
        public virtual DbSet<DynamicReportMetricType> DynamicReportMetricTypes { get; set; }
        public virtual DbSet<DynamicReportParameter> DynamicReportParameters { get; set; }
        public virtual DbSet<DynamicReportRenderFormat> DynamicReportRenderFormats { get; set; }
        public virtual DbSet<DynamicReportServer> DynamicReportServers { get; set; }
        public virtual DbSet<DynamicReportServerType> DynamicReportServerTypes { get; set; }
        public virtual DbSet<DynamicReportType> DynamicReportTypes { get; set; }
        public virtual DbSet<DynamicReportWriteMode> DynamicReportWriteModes { get; set; }
        public virtual DbSet<ParameterType> ParameterTypes { get; set; }
        public virtual DbSet<SubscriptionClientData> SubscriptionClientDatas { get; set; }
        public virtual DbSet<SubscriptionDeliveryOption> SubscriptionDeliveryOptions { get; set; }
        public virtual DbSet<SubscriptionEMailPriority> SubscriptionEMailPriorities { get; set; }
        public virtual DbSet<SubscriptionInfo> SubscriptionInfoes { get; set; }
        public virtual DbSet<Test> Tests { get; set; }
        public virtual DbSet<Log> Logs { get; set; }
    }
}
