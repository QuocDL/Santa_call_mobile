import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState, memo } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

interface PaginationProps {
   totalPage: number;
   onChangePage: (page: number) => void;
}

const Pagination = ({ totalPage, onChangePage }: PaginationProps) => {
   const [currentPage, setCurrentPage] = useState(1);

   const handleChangePage = (num: number) => {
      setCurrentPage(num);
      onChangePage(num);
   };

   const handlePrevPage = () => {
      if (currentPage > 1) {
         handleChangePage(currentPage - 1);
      }
   };

   const handleNextPage = () => {
      if (currentPage < totalPage) {
         handleChangePage(currentPage + 1);
      }
   };

   const getDisplayedPages = () => {
      if (totalPage <= 3) {
         return Array.from({ length: totalPage }, (_, i) => i + 1);
      }

      if (currentPage === 1 || currentPage === 2) {
         return [1, 2, 3, 4];
      } else if (currentPage === totalPage) {
         return [totalPage - 2, totalPage - 1, totalPage];
      } else {
         return [currentPage - 1, currentPage, currentPage + 1];
      }
   };

   const PageButton = memo(({ pageNumber }: { pageNumber: number }) => (
      <TouchableOpacity
         className={`h-[30px] w-[30px] rounded-full ${pageNumber === currentPage ? "bg-[#000000]" : "bg-[#D3CFCF]"
            } flex justify-center items-center`}
         onPress={() => handleChangePage(pageNumber)}
      >
         <Text
            className={`text-xl font-bold ${pageNumber === currentPage ? "text-[#C90019]" : "text-[#C90019]"
               }`}
         >
            {pageNumber}
         </Text>
      </TouchableOpacity>
   ));

   return (
      <View
         className="flex-row justify-center items-center mt-2 h-9 w-full overflow-x-scroll"
         style={{ gap: 3 }}
      >
         <TouchableOpacity
            className="h-[30px] w-[30px] rounded-full bg-[#D3CFCF] flex justify-center items-center"
            onPress={handlePrevPage}
         >
            <AntDesign name="left" size={16} color="#000" />
         </TouchableOpacity>
         { currentPage > 2 && currentPage < 4 && (
           <PageButton pageNumber={1}/>
         )}
         {currentPage > 3 && (
            <TouchableOpacity
               className="h-[30px] w-[30px] rounded-full bg-[#D3CFCF] flex justify-center items-center"
               onPress={() => handleChangePage(currentPage - 2)}
            >
               <Text className="text-[#C90019] font-bold text-xl">...</Text>
            </TouchableOpacity>
         )}
         {getDisplayedPages().map((pageNumber) => (
            <PageButton key={pageNumber} pageNumber={pageNumber} />
         ))}

         {currentPage < totalPage - 2 && (
            <TouchableOpacity
               className="h-[30px] w-[30px] rounded-full bg-[#D3CFCF] flex justify-center items-center"
               onPress={() => handleChangePage(totalPage)}
            >
               <Text className="text-[#C90019] font-bold text-xl">...</Text>
            </TouchableOpacity>
         )}

         <TouchableOpacity
            className="h-[30px] w-[30px] rounded-full bg-[#D3CFCF] flex justify-center items-center"
            onPress={handleNextPage}
         >
            <AntDesign name="right" size={16} color="#000" />
         </TouchableOpacity>
      </View>
   );
};

export default Pagination;
