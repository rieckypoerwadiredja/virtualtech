import useFetch from "./useFetch";

const usePortoDetail = (creator, id, title) => {
  const apiUrl = `https://webster-backend.vercel.app/api/portfolios/${creator}/${id}/${title}`;
  const { data, error, loading } = useFetch(apiUrl);
  if (data) {
    const dataPorto =
      data && data.portfolio && data.portfolio.length > 0
        ? data.portfolio[0]
        : null;

    return { data: dataPorto, error, loading };
  }
  return { data, error, loading };
};

export default usePortoDetail;
