using BlackMagicCaneCorso.Business;
using BlackMagicCaneCorso.Data;
using BlackMagicCaneCorso.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using NSwag.AspNetCore;
using System.Text;

namespace BlackMagicCaneCorso
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
            services.AddDbContext<DogContext>(options =>
                 options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            services.AddScoped<Puppies>();
            services.AddScoped<PuppiesRepository>();
            services.AddScoped<Authorization>();
            services.AddScoped<AuthorizationRepository>();
            services.AddScoped<PictureBusiness>();
            services.AddScoped<PictureRepository>();
            services.AddScoped<BlobRepository>();
            services.AddScoped<AnnouncementBusiness>();
            services.AddScoped<AnnouncementRepository>();

            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
                    .AddJwtBearer(options =>
                    {
                        options.TokenValidationParameters = new TokenValidationParameters
                        {
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,

                            ValidIssuer = "http://localhost",
                            ValidAudience = "http://localhost",
                            IssuerSigningKey = new SymmetricSecurityKey(key)
                        };
                    });


            services.AddMvc().AddJsonOptions(options =>
            {
                options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            var aiOptions = new Microsoft.ApplicationInsights.AspNetCore.Extensions.ApplicationInsightsServiceOptions();
            aiOptions.EnableAdaptiveSampling = false;
            services.AddApplicationInsightsTelemetry(aiOptions);
            services.AddSwaggerDocument();
            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "App/dist";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();
            app.UseSpaStaticFiles();

            app.UseAuthentication();

            app.UseMvc();

            app.UseSwagger();
            app.UseSwaggerUi3();

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "App";

                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });

        }
    }
}
