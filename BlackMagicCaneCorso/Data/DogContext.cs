using Microsoft.EntityFrameworkCore;
using BlackMagicCaneCorso.Models;

namespace BlackMagicCaneCorso.Data
{
    public class DogContext : DbContext
    {
        public DogContext(DbContextOptions<DogContext> options) : base(options)
        {
            
        }
        public DbSet<Dog> Dogs { get; set; }
        public DbSet<Picture> Pictures { get; set; }
        public DbSet<AccountInfo> Accounts { get; set; }
        public DbSet<AccountType> AccountTypes { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Dog>().ToTable("Dog");
            modelBuilder.Entity<Picture>().ToTable("Picture");
            modelBuilder.Entity<AccountInfo>().ToTable("AccountInfo");
            modelBuilder.Entity<AccountType>().ToTable("AccountType");
        }
    }
}
