import Button from "components/Button";
import SectionHeader from "components/SectionHeader";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";

const SummaryPage = () => {
  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <div className="h-5/6 w-full pt-2">
            <SectionHeader>Podsumowanie</SectionHeader>
            <div className="bg-white h-5/18 my-4"></div>
            <div className="bg-white h-7/18 my-4 rounded-b-3xl"></div>
            <div className="flex flex-col justify-around items-center h-1/6 w-full">
              <div>
                <button
                  type="submit"
                  className="bg-secondary-pink py-2 px-10 text-white text-2xl 3xl:text-3xl rounded-2xl"
                >
                  Zamawiam
                </button>
              </div>
              <div>
                <Button href="/" cancel>
                  Anuluj
                </Button>
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </PageWrapper>
  );
};
export default SummaryPage;
