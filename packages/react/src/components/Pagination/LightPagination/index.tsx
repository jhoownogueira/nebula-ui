import { PaginationContainer } from "./styles";

export interface PaginationLightProps {
  page: string;
  totalPages: string;
  handlePreviousPage: () => void;
  handleNextPage: () => void;
}

export function PaginationLight({
  page,
  totalPages,
  handlePreviousPage,
  handleNextPage,
}: PaginationLightProps) {
  return (
    <PaginationContainer>
      <button className="prev-page" onClick={handlePreviousPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
        </svg>
      </button>
      <span>
        <strong>{page}</strong>/{totalPages}
      </span>
      <button className="next-page" onClick={handleNextPage}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#000000"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
      </button>
    </PaginationContainer>
  );
}
PaginationLight.displayName = "PaginationLight";
