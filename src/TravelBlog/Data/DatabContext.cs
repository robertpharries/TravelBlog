using System;
using TravelBlog.Models;
using Microsoft.EntityFrameworkCore;

namespace TravelBlog.Data
{
    public class DatabContext : DbContext
    {
        public DatabContext(DbContextOptions<DatabContext> options) : base(options)
        {
        }

        public DbSet<UserDetails> UserDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<UserDetails>().ToTable("userdetails");
        }
    }
}