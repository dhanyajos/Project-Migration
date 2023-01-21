using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Project_Migration.Model
{
    public class Police
    {
        [Key]
        public int Policeid { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
       
    }
}
