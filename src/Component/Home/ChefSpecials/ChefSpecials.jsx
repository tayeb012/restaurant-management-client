import React from "react";

const ChefSpecials = () => {
  return (
    <div>
      <section className="py-12 px-32 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-4 text-center bg-gradient-to-r from-[#4C53E8] to-[#04B1F3] text-transparent bg-clip-text">
            Chef's Culinary Corner
          </h2>
          <h3 className="text-2xl font-semibold mb-4 text-center bg-gradient-to-r from-blue-400 to-green-500 text-transparent bg-clip-text">
            Welcome to Chef's Culinary Corner, a realm where each dish is a
            masterpiece and every bite tells a story. Step into the
            extraordinary world of our chefs, where passion and creativity
            converge to redefine the dining experience.
          </h3>

          {/* Chef's Spotlight Section */}
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <img
              alt="Chef Alessandro"
              className="w-full sm:w-1/2 h-auto rounded-lg"
              src="https://t4.ftcdn.net/jpg/06/35/20/15/240_F_635201516_G2TFpFPoFA6utXYNgFlgPJGwU24mj6CJ.jpg"
            />
            <div className="w-full sm:w-1/2">
              <p className="text-xl font-sans text-gray-800 leading-relaxed bg-gradient-to-br from-teal-300 to-blue-500 p-6 rounded-lg shadow-xl">
                Meet Chef Alessandro, a culinary virtuoso known for harmonizing
                traditional flavors with a modern twist. Indulge in his
                masterpiece, the enchanting{" "}
                <span className="font-bold text-blue-800">
                  "Saffron Symphony,"
                </span>{" "}
                as it takes you on a captivating journey to the picturesque
                landscapes of Provence.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse sm:flex-row-reverse  gap-8 items-center">
            <img
              alt="Chef Isabella"
              className="w-full sm:w-1/2 h-auto rounded-lg"
              src="https://t3.ftcdn.net/jpg/01/06/20/40/240_F_106204059_lleqNc7r5xqH4g0Ksm8xSwUr5bh3NiJy.jpg"
            />
            <div className="w-full sm:w-1/2">
              <p data-aos="fade-right" className="text-xl font-sans text-gray-800 leading-relaxed bg-gradient-to-br from-teal-300 to-blue-500 p-6 rounded-lg shadow-xl">
                Next up is Chef Isabella, a connoisseur of exotic spices. Her
                Recipe of the Month,{" "}
                <span className="font-bold text-blue-800">
                  {" "}
                  "Mango Tango Tart,"
                </span>{" "}
                is a dance of sweet and tangy notes that will tantalize your
                taste buds.
              </p>
            </div>
          </div>
          {/* Recipe of the Month */}
          <div className="flex flex-col-reverse sm:flex-row-reverse  gap-8 items-center">
            <div className="w-full sm:w-1/2">
              <p className="text-xl font-sans text-gray-800 leading-relaxed bg-gradient-to-br from-teal-300 to-blue-500 p-6 rounded-lg shadow-xl">
                Join us in the Kitchen Chronicles with Chef Miguel, whose
                culinary adventures span the globe. His latest creation,{" "}
                <span className="font-bold text-blue-800">
                  {" "}
                  "Tokyo Nights Ramen,"{" "}
                </span>{" "}
                is a fusion of Japanese and Latin American influences, promising
                a bowlful of surprises.
              </p>
            </div>
            <img
              alt="Chef Miguel"
              className="w-full sm:w-1/2 h-auto rounded-lg"
              src="https://t3.ftcdn.net/jpg/06/47/04/44/240_F_647044416_6m7LAUtRLBe2cqMHrv5NnNtsl1dMC256.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChefSpecials;
