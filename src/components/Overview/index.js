import React from "react";

const Overview = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-3">
      <div className="text-gray-700 w-11/12">
        A gynecologist is a surgeon who specializes in the female reproductive
        system, which includes the cervix, fallopian tubes, ovaries, uterus,
        vagina and vulva. Menstrual problems, contraception, sexuality,
        menopause and infertility issues are diagnosed and treated by a
        gynecologist; most gynecologists also provide prenatal care, and some
        provide primary care.
      </div>
      <div className="mt-3">
        <div className="text-lg text-gray-800 font-semibold">
          Specialities:{" "}
        </div>
        <div className="text-gray-700 mt-3">
          <li>Women's health services</li>
          <li>Pregnancy care</li>
          <li>Surgical procedures</li>
          <li>Specialty care</li>
          <li>Conclusion</li>
        </div>
      </div>
    </div>
  );
};

export default Overview;
