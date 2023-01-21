using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Project_Migration.Data;
using Project_Migration.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project_Migration.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PoliceController : ControllerBase
    {
        public ContextClass Police { get; set; }
        public PoliceController(ContextClass contextclass)
        {
            this.Police = contextclass;

        }
        [HttpPost("LoginPolice")]
        public IActionResult LoginPolice(Login user)
        {

            var userAvailable = Police.tblpolice.Where(u => u.Username == user.Username && u.Password == user.Password).FirstOrDefault();


            if (userAvailable == null)
            {
                return Ok("Failure");
            }

            return Ok("Success");
        }
    }
}
