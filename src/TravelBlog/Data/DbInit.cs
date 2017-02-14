using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TravelBlog.Data;
using TravelBlog.Models;

namespace TravelBlog.Data
{
    public class DbInit
    {
        public static void Initialize(DatabContext context)
        {
            try
            {
                context.Database.EnsureCreated();

                // Look for any students.
                if (context.UserDetails.Any())
                {
                    return;   // DB has been seeded
                }

                var students = new UserDetails[]
                {
                new UserDetails{name="Robert",email="tedasdfasdfharr7@gmail.com"},
                new UserDetails{name="baro",email="tedhaasdfrr7@gmail.com"},
                new UserDetails{name="diddly",email="tedhasdfarr7@gmail.com"},
                new UserDetails{name="esha",email="tedhaasdfawerrr7@gmail.com"},
                };
                foreach (UserDetails s in students)
                {
                    context.UserDetails.Add(s);
                }
                context.SaveChanges();
            }
            catch (Exception e)
            {
                System.Diagnostics.Debug.WriteLine(e);
            }
        }
    }
}
