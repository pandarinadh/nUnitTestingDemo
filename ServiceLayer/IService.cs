using BusinessDataModel;

namespace ServiceLayer
{
    public interface IService<T> where T: BaseModel
    {
        void Validate(T t);

    }
}