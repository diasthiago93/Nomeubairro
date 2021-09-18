import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 0 2rem;
  margin: 6rem auto;
  .cards + .cards {
    margin-top: 10px;
  }
  .map {
    width: 100%;
    height: 100vh;
  }

  .page-map .leaflet-container {
    z-index: 0;
  }
`;
