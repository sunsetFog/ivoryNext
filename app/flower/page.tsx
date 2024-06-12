import React from "react";

// import { GetStaticPaths, GetStaticProps } from 'next';

const Flower = (props: any) => {
    console.log("--Flower--", props)
    return <section>
        ---flower---
    </section>
}

// export const getStaticProps: GetStaticProps = async ({ params = { id: '' } }) => {
//     try {
//     //   const activeInfo = await getActiveInfoReq({ id: params.id });
//       return {
//         props: {
//           initActiveInfo: { title: '花'},
//         },
//       };
//     } catch (e) {
//     //   console.error('activeLandPageApi', e);
//       return {
//         props: {
//           initActiveInfo: { title: '枝' },
//         },
//       };
//     }
// };

export default Flower;
