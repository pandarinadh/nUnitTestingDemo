using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(ASPNETMVCFilter.Startup))]
namespace ASPNETMVCFilter
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
