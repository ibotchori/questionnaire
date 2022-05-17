import React from "react";

import image from "../assets/images/injection-image.png";
import ContentImage from "../components/ContentImage/ContentImage";
import Info from "../components/Info/Info";
import RadioButton from "../components/RadioButton/RadioButton";

const Injection = () => {
  return (
    <>
      {/* Content */}
      <div className="flex justify-center lg:justify-between px-5 md:pr-20 lg:px-20 h-full ">
        {/* Content Text */}
        <div className="flex flex-col pt-10 md:pl-20">
          <RadioButton
            title="უკვე აცრილი ხარ?*"
            name="injection"
            firstLabel="კი"
            secondLabel="არა"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <RadioButton
            title="აირჩიე რა ეტაპზე ხარ*"
            name="stage"
            firstLabel="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            secondLabel="სრულად აცრილი ვარ"
            thirdLabel="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <Info text="რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი" />
          <RadioButton
            title="რას ელოდები?*"
            name="wait"
            firstLabel="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            secondLabel="არ ვგეგმავ"
            thirdLabel="გადატანილი მაქვს და ვგეგმავ აცრას"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <Info icon={true} />
          <Info
            text={"👉 რეგისტრაციის ბმული"}
            header="ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.  "
          />
        </div>
        {/* Content Image */}
        <ContentImage src={image} />
      </div>
    </>
  );
};

export default Injection;
