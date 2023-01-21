using Microsoft.EntityFrameworkCore;
using Project_Migration.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_Migration.Data
{
    public class ContextClass : DbContext
    {
        public ContextClass(DbContextOptions<ContextClass> options) : base(options)
        {
        }
        public DbSet<UserRegister> tbluser { get; set; }

        public DbSet<Application> tblapplication { get; set; }

        public DbSet<Contact> tblcontact { get; set; }

        public DbSet<Police> tblpolice { get; set; }
    }
}
