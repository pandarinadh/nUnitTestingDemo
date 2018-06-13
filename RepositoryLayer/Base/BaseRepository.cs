using EntityDataModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RepositoryLayer
{
    public abstract class BaseRepository<T> : IDisposable
    {
        protected DynamicReportsDBEntities Context;

        //public AuthorizationServerContextRepositoryBase(AuthorizationServerContext context)
        //{
        //    this.Context = context;
        //    MapperConfig.Configure();
        //}

        public BaseRepository()
        {
            this.Context = new DynamicReportsDBEntities();
        }

        private bool disposed = false;

        protected virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    Context.Dispose();
                }
            }
            this.disposed = true;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void SaveModel(T t)
        {

        }
    }
}
