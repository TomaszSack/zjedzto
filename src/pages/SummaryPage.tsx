import Button from "components/Button";
import { useCart } from "components/context/CartService";
import GroupHeader from "components/GroupHeader";
import SectionHeader from "components/SectionHeader";
import ContentContainer from "layout/ContentContainer";
import PageWrapper from "layout/PageWrapper";

const SummaryPage = () => {
  const {cartTotalPrice} = useCart();
  return (
    <PageWrapper>
      <div className="h-screen bg-primary-white">
        <ContentContainer className="flex flex-wrap items-center">
          <div className="h-5/6 w-full pt-2">
            <SectionHeader>Podsumowanie</SectionHeader>
            <div className="flex bg-white h-5/18 my-4 shadow-lg">
              <div className="w-1/3">
                <GroupHeader>Adres</GroupHeader>
                <div className="w-full h-5/6 p-4 text-3xl 3xl:text-4xl space-y-2">
                  <p>ul.Batorego 16,</p>
                  <p>lokal 4, piętro 2</p>
                  <p>14-100 Ostróda</p>
                </div>
              </div>
              <div className="w-1/3">
                <GroupHeader>Kontakt</GroupHeader>
                <div className="w-full h-5/6 p-4 text-3xl 3xl:text-4xl space-y-2">
                  <p>Tomasz Sack</p>
                  <p>+48 123123123</p>
                  <p>tomasz@mail.pl</p>
                </div>
              </div>
              <div className="w-1/3">
                <GroupHeader>Komentarz</GroupHeader>
                <div className="p-4 text-3xl 3xl:text-3xl w-5/6 h-5/6">
                  Prosze o usunięcie sałąty bla bla bla i dodanie czegoś super
                </div>
              </div>
            </div>
            <div className="bg-white h-7/18 my-4 shadow-lg rounded-b-3xl">
              <GroupHeader>Zamówienie</GroupHeader>
              <div className="flex justify-between h-4/6 p-4 text-2xl">
                <p>1x Burger wołowy z bekonem</p>
                <p>1x 39,99 zł</p>
              </div>
              <div className="flex items-center justify-between h-1/6 w-1/6 border-t border-primary-gray ml-auto text-xl p-3">
                <div>Razem</div>
                <div>{cartTotalPrice} zł</div>
              </div>
            </div>
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
