using EntityDataModel;

namespace RepositoryLayer
{
    public interface IRepository<T>
    {
        T Save(T t);
    }
}