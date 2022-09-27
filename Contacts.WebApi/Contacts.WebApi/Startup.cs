using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Contacts.Core;
using Contacts.DB;
using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace Contacts.WebApi
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<AppDbContext>(o => o.UseSqlServer(Configuration.GetConnectionString("DB_CONNECTION_STRING"))); 
            services.AddControllers();
            services.AddDbContext<AppDbContext>();
            services.AddTransient<IContactsServices, ContactsServices>();

            services.AddTransient<IUserServices, UserServices>();

            services.AddTransient<IPasswordHasher, PasswordHasher>();

            services.AddTransient<IHttpContextAccessor, HttpContextAccessor>(); 

            services.AddSwaggerDocument(settings =>
            {
                settings.Title = "Contacts";
            });
            services.AddCors(options =>
            {
                options.AddPolicy("ContactsPolicy", builder => {
                    builder.WithOrigins("*")
                    .AllowAnyHeader()
                    .AllowAnyMethod(); 
                });
            });
            var secret = Environment.GetEnvironmentVariable("JWT_SECRET");
            var issuer = Environment.GetEnvironmentVariable("JWT_ISSUER");

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = issuer,
                    ValidateAudience = false,
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secret))
            };
            }); 

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors("ContactsPolicy");

            app.UseAuthentication(); 

            app.UseAuthorization();

            app.UseOpenApi();

            app.UseSwaggerUi3(); 

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });

       

        }
    }
}
