using System.Threading.Tasks;
using Contacts.Core.DTO;
using Contacts.DB;

namespace Contacts.Core
{
    public interface IUserServices
    {
        Task<AuthenticatedUser> SignUp(User user);
        Task<AuthenticatedUser> SignIn(User user);
        Task<AuthenticatedUser> ExternalSignIn(User user); 
    }
}
