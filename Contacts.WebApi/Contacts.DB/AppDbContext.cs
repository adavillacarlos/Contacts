using Microsoft.EntityFrameworkCore;

namespace Contacts.DB
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base (options)
        {

        }
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<User> Users { get; set; }
       
    }
}
