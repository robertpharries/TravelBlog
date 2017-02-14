using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TravelBlog.Data;
using TravelBlog.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace TravelBlog.Controllers
{
    [Route("api/[controller]")]
    public class SampleController : Controller
    {
        private readonly DatabContext context;

        public SampleController(DatabContext cont)
        {
            context = cont;
        }

        //returns all 
        [HttpGet]
        //public IEnumerable<UserDetails> UserDetails() => context.UserDetails;
        public IEnumerable<UserDetails> Get()
        {
            System.Diagnostics.Debug.WriteLine("called");
            foreach (var user in context.UserDetails)
            {
                System.Diagnostics.Debug.WriteLine(user);
            }
            return context.UserDetails;
        }

        // /api/Sample/GetUser/{id}
        [HttpGet("{id}", Name = "[action]")]
        public UserDetails GetUserDetails(int id) => context.UserDetails.First(r => r.id == id);

    }
}
