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
            label1="კი"
            label2="არა"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <RadioButton
            title="აირჩიე რა ეტაპზე ხარ*"
            name="stage"
            label1="პირველი დოზა და დარეგისტრირებული ვარ მეორეზე"
            label2="სრულად აცრილი ვარ"
            label3="პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე"
            errorMessage="აირჩიეთ ერთ-ერთი"
          />
          <Info text="რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი" />
          <RadioButton
            title="რას ელოდები?*"
            name="wait"
            label1="დარეგისტრირებული ვარ და ველოდები რიცხვს"
            label2="არ ვგეგმავ"
            label3="გადატანილი მაქვს და ვგეგმავ აცრას"
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
