import cityPark from '../../assets/routemapimages/CityPark.png';
import denverDowntown from '../../assets/routemapimages/DenverDowntown.png';
import arvadaEasy from '../../assets/routemapimages/ArvadaEasy.png';
import belmabrook from '../../assets/routemapimages/Belmabrook.png';
import crownHill from '../../assets/routemapimages/CrownHill.png';
import berkley from '../../assets/routemapimages/Berkley.png';
import boulder from '../../assets/routemapimages/Boulder.png';
import centralPark from '../../assets/routemapimages/CentralPark.png';
import cherryCreek from '../../assets/routemapimages/CherryCreek.png';
import golden from '../../assets/routemapimages/Golden.png';
import lakewoodGulch from '../../assets/routemapimages/LakewoodGulch.png';
import rino from '../../assets/routemapimages/RiNo.png';
import washPark from '../../assets/routemapimages/WashPark.png';
import sloansLake from '../../assets/routemapimages/SloansLake.png';

export const skateRoutes = {
  regular: [
    {
      name: "River North (RiNo)",
      length: 7,
      avgSpeed: 10,
      rating: "Black",
      elevation: 126,
      startName: "Out Front of Ratio Beerworks",
      startUrl: "https://goo.gl/maps/x5Fe3Rz4efgmc5Cx6",
      img: rino,
    },
    {
      name: "Wash Park",
      length: 2,
      avgSpeed: 6,
      rating: "Green",
      elevation: 42,
      startName: "Wash Park Basketball Courts",
      startUrl: "https://goo.gl/maps/qi9thDCAnn9W22yb6",
      img: washPark,
    },
    {
      name: "City Park",
      length: 7,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 90,
      startName: "SW Corner of the Museum of Nature & Science",
      startUrl: "https://goo.gl/maps/1qKccJXAj2AkcUDR9",
      img: cityPark,
    },
    {
      name: "Downtown Denver",
      length: 8,
      avgSpeed: 10,
      rating: "Black",
      elevation: 180,
      startName: "Civic Center Park near 14th and Bannock",
      startUrl: "https://goo.gl/maps/Wvd2p7gUUE3dwSyR7",
      img: denverDowntown,
    },
    {
      name: "Sloan's Lake",
      length: 5,
      avgSpeed: 6,
      rating: "Green",
      elevation: 40,
      startName: "Sloan's Lake Boat House",
      startUrl: "https://goo.gl/maps/DAKHAQpKsjEmvKYq5",
      img: sloansLake,
    },
    {
      name: "Central Park",
      length: 8,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 156,
      startName: "Pavilion at Central Park",
      startUrl: "https://goo.gl/maps/54qgNR8kUiHvVQ67A",
      img: centralPark,
    },
    {
      name: "Cherry Creek",
      length: 9,
      avgSpeed: 10,
      rating: "Black",
      elevation: 193,
      startName: "Pavilion at Cheesman Park",
      startUrl: "https://goo.gl/maps/re1sVufuwRK46s7j6",
      img: cherryCreek,
    },
    {
      name: "Berkley",
      length: 6,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 151,
      startName: "Elitch Carousel",
      startUrl: "https://goo.gl/maps/TcLGXf1sreCSfTtB8",
      img: berkley,
    },
    {
      name: "Golden",
      length: 8,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 194,
      startName: "Parfet Park",
      startUrl: "https://goo.gl/maps/7hNycdiaiMdKnYCD8",
      img: golden,
    },
    {
      name: "Lakewood Gulch",
      length: 10,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 356,
      startName: "Denver Skate Park",
      startUrl: "https://goo.gl/maps/RBH3rkQNswPRLXbD7",
      img: lakewoodGulch,
    },
  ],
  experimental: [
    {
      name: "Arvada Easy Mode",
      length: 7,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 111,
      startName: "Arvada Memorial Skate Park",
      startUrl: "https://goo.gl/maps/L4VmRazTidLH9gWp9",
      img: arvadaEasy,
    },
    {
      name: "Belmabrook",
      length: 5,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 153,
      startName: "Heritage Lakewood Building",
      startUrl: "https://goo.gl/maps/3cXb5b693HxTJdPk9",
      img: belmabrook,
    },
    {
      name: "Boulder",
      length: 9,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 163,
      startName: "Valmont Skate Park",
      startUrl: "https://goo.gl/maps/eg35HiPMHLCy9E7o9",
      img: boulder,
    },
    {
      name: "Crown Hill",
      length: 7,
      avgSpeed: 8,
      rating: "Blue",
      elevation: 170,
      startName: "Crown Hill main parking lot",
      startUrl: "https://goo.gl/maps/tWRe872AJfeRjqX17",
      img: crownHill,
    },
  ],
};
