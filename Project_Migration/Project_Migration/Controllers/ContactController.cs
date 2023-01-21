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
    public class ContactController : ControllerBase
    {
        public ContextClass Contact { get; set; }
        public ContactController(ContextClass contextclass)
        {
            this.Contact = contextclass;

        }
        [HttpPost("InsertQuery")]

        public async Task<ActionResult> InsertQuery(Contact cu)
        {

            Contact.tblcontact.Add(cu);
            await Contact.SaveChangesAsync();
            return Ok(cu);
        }

        [HttpGet("viewquery")]

        public async Task<List<Contact>> ViewQuery()

        {

            return Contact.tblcontact.ToList();

        }
    }
}
