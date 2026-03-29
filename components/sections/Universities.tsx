'use client';

import Link from 'next/link';
import SectionWrapper from '@/components/ui/SectionWrapper';
import SectionTitle from '@/components/ui/SectionTitle';
import UniversityCard from '@/components/ui/UniversityCard';

const featuredUniversities = [
  { name: 'Université de Pékin (PKU)', city: 'Pékin', rank: '#17', specialties: ['Sciences', 'Droit', 'Économie'], slug: 'universite-pekin-pku' },
  { name: 'Université Tsinghua', city: 'Pékin', rank: '#25', specialties: ['Ingénierie', 'Architecture', 'Informatique'], slug: 'universite-tsinghua' },
  { name: 'Shanghai Jiao Tong (SJTU)', city: 'Shanghai', rank: '#51', specialties: ['Ingénierie', 'Médecine'], slug: undefined },
  { name: 'Université Fudan', city: 'Shanghai', rank: '#55', specialties: ['Médecine', 'Économie', 'Sciences'], slug: 'universite-fudan-shanghai' },
  { name: 'Université Zhejiang', city: 'Hangzhou', rank: '#67', specialties: ['Sciences', 'Agriculture', 'Tech'], slug: 'universite-zhejiang' },
  { name: 'Nankai University', city: 'Tianjin', rank: '#206', specialties: ['Économie', 'Chimie', 'Mathématiques'], slug: undefined },
  { name: 'Wuhan University', city: 'Wuhan', rank: '#270', specialties: ['Droit', 'Informatique', 'Sciences'], slug: undefined },
  { name: "Xi'an Jiaotong University", city: "Xi'an", rank: '#325', specialties: ['Ingénierie', 'Médecine', 'Énergie'], slug: undefined },
];

const row1 = [
  'Université Renmin de Chine', 'Univ. Normale de Pékin', 'Beihang University', 'Beijing Institute of Technology',
  'UIBE Pékin', 'Beijing Foreign Studies Univ.', 'Université Tongji', 'East China Normal Univ.',
  'East China Univ. of Science', 'Shanghai Univ.', 'Shanghai Intl. Studies Univ.', 'Donghua University',
  'Sun Yat-sen University', 'South China Univ. of Technology', 'Jinan University', 'Shenzhen University',
  'Nanjing University', 'Southeast University', 'Nanjing Univ. of Aeronautics', 'Hohai University',
  'China Pharmaceutical Univ.', 'Nanjing Agricultural Univ.', 'Nanjing Normal Univ.', 'Soochow University',
  'Shandong University', 'Ocean University of China', 'China Univ. of Petroleum', 'Qingdao University',
  'Central South University', 'Hunan University', 'Natl. Univ. of Defense Tech.', 'Xiangtan University',
  'Univ. of Electronic Science UESTC', 'Sichuan University', 'Southwest Jiaotong Univ.', 'Chongqing University',
  'Xiamen University', 'Fuzhou University', 'Huaqiao University', 'Univ. of Science & Tech. of China',
  'Hefei Univ. of Technology', 'Zhengzhou University', 'Harbin Institute of Technology', 'Harbin Engineering Univ.',
  'Tianjin University', 'Nankai University', 'Northeastern University (Shenyang)', 'Dalian Univ. of Technology',
  'Jilin University', 'Northeast Normal Univ.', 'Lanzhou University', 'Yunnan University',
  'Guangxi University', 'Inner Mongolia University', 'Xinjiang University', 'Hainan University',
  'Nanchang University', 'Shanxi University', 'Taiyuan Univ. of Technology', 'Tibet University',
  'Guizhou University', 'Beijing Language & Culture Univ.', 'Minzu University of China', 'Capital Medical Univ.',
  'Beijing Sport University', 'Central Univ. of Finance', 'Communication Univ. of China', 'Hebei Univ. of Technology',
  'North China Electric Power Univ.', 'Yanshan University', 'Shenyang Univ. of Technology', 'China Medical Univ.',
  'Qinghai University', 'Ningxia University', 'Univ. of Macau', 'Macau Univ. of Science & Technology',
  'Kunming Univ. of Science & Tech.', 'Huazhong Univ. of Science & Tech.', 'Wuhan Univ. of Technology',
  'China Univ. of Geosciences (Wuhan)', 'Huazhong Agricultural Univ.', 'Huazhong Normal Univ.',
  'Zhongnan Univ. of Economics', 'Hubei University', 'Three Gorges University', 'Changsha Univ. of Science & Tech.',
  'South-Central Univ. for Nationalities', 'Hunan Agricultural Univ.', 'Southwest Univ. of Finance',
  'Chengdu Univ. of Technology', 'Sichuan Normal Univ.', 'Southwest University (Chongqing)',
  'Chongqing Medical Univ.', 'Chongqing Normal Univ.', 'Chongqing Univ. of Posts & Telecom.',
  'Southwest Medical Univ.', 'Fujian Normal Univ.', 'Fujian Medical Univ.', 'Fujian Agriculture & Forestry Univ.',
  'Anhui University', 'Anhui Medical Univ.', 'Anhui Agricultural Univ.', 'Henan University',
  'Henan Normal Univ.', 'Henan Agricultural Univ.', 'Henan Univ. of Technology',
  'Hebei Normal Univ.', 'Hebei Medical Univ.', 'North China Univ. of Science & Tech.',
  'Yunnan Normal Univ.', 'Yunnan Agricultural Univ.', 'Yunnan Univ. of Finance & Economics',
  'Guizhou Medical Univ.', 'Guizhou Normal Univ.', 'Guizhou Univ. of Finance & Economics',
  'Guangxi Medical Univ.', 'Guangxi Normal Univ.', 'Guangxi Univ. for Nationalities',
  'Guilin Univ. of Electronic Tech.', 'Inner Mongolia Agricultural Univ.',
  'Inner Mongolia Univ. of Science & Tech.', 'Shihezi University', 'Xinjiang Medical Univ.',
  'Lanzhou Univ. of Technology', 'Northwest Normal Univ.', 'Northwest Minzu Univ.',
  'Qinghai Normal Univ.', 'Ningxia Medical Univ.', 'Hainan Medical Univ.',
];

const row2 = [
  'Jiangxi Normal Univ.', 'Jiangxi Agricultural Univ.', 'Jiangxi Univ. of Finance & Economics',
  'East China Univ. of Technology', 'North University of China', 'Shanxi Agricultural Univ.',
  'Shanxi Medical Univ.', 'Tibet Agriculture & Animal Husbandry Univ.',
  'Dalian Maritime Univ.', 'Dalian Medical Univ.', 'Liaoning University', 'Liaoning Normal Univ.',
  'Dalian Nationalities Univ.', 'Bohai University', 'Shenyang University', 'Shenyang Agricultural Univ.',
  'Shenyang Jianzhu Univ.', 'Shenyang Normal Univ.', 'Shenyang Pharmaceutical Univ.',
  'China Univ. of Mining & Technology', 'Qingdao Agricultural Univ.', 'Shandong Normal Univ.',
  'Shandong Agricultural Univ.', 'Shandong Univ. of Science & Tech.', 'Shandong Univ. of Finance & Economics',
  'Shandong Univ. of Traditional Chinese Medicine', 'Qingdao Univ. of Science & Tech.',
  'Jilin Normal Univ.', 'Beihua University', 'Jilin Univ. of Finance & Economics',
  'Northeast Electric Power Univ.', 'Changchun University', 'Jilin Agricultural Univ.',
  'Yanbian University', 'Changchun Univ. of Science & Tech.',
  'Heilongjiang Univ. of Science & Tech.', 'Northeast Petroleum Univ.', 'Qiqihar University',
  'Mudanjiang Normal Univ.', 'Northeast Agricultural Univ.', 'Harbin Medical Univ.',
  'Heilongjiang University', 'Tianjin Medical Univ.', 'Tianjin Normal Univ.',
  'Tianjin Univ. of Technology', 'Civil Aviation Univ. of China', 'Tianjin Univ. of Finance & Economics',
  'Nanjing Univ. of Information Science', 'Nanjing Forestry Univ.', 'Jiangnan University',
  'Yangzhou University', 'Nanjing Univ. of Finance & Economics', 'Nanjing Medical Univ.',
  'Nanjing Univ. of Posts & Telecom.', 'Nanjing Univ. of Arts', 'Jiangsu Normal Univ.',
  'Xuzhou Medical Univ.', 'Nantong University', 'Jiangsu University',
  'Suzhou Univ. of Science & Tech.', 'Nanjing Univ. of Science & Tech.',
  'Zhejiang Univ. of Technology', 'Hangzhou Dianzi Univ.', 'Zhejiang Normal Univ.',
  'Zhejiang Gongshang Univ.', 'Zhejiang Univ. of Finance & Economics', 'Ningbo University',
  'China Jiliang University', 'Wenzhou University', 'Zhejiang Sci-Tech Univ.',
  'Zhejiang Univ. of Media & Communications', 'Zhejiang Chinese Medical Univ.',
  'Hangzhou Normal Univ.', 'Zhejiang Agriculture & Forestry Univ.', 'Jiaxing University',
  'Huzhou University', 'Shaoxing University', 'Wenzhou Medical Univ.',
  'South China Normal Univ.', 'Guangzhou University', 'Southern Medical Univ.',
  'Guangdong Univ. of Technology', 'South China Agricultural Univ.', 'Guangdong Univ. of Foreign Studies',
  'Shantou University', 'Southern Univ. of Science & Tech.', 'Guangdong Pharmaceutical Univ.',
  'Guangzhou Medical Univ.', 'Guangzhou Univ. of Chinese Medicine', 'Guangdong Medical Univ.',
  'Guangdong Ocean University', 'Foshan University', 'Shenzhen Technology Univ.',
  "Xi'an Jiaotong-Liverpool Univ.", 'Univ. of Nottingham Ningbo China', 'Duke Kunshan University',
  'Xidian University', "Chang'an University", 'Northwest University',
  'Shaanxi Normal Univ.', "Xi'an Univ. of Technology", "Xi'an Univ. of Architecture & Tech.",
  'Nanjing Univ. of Science & Tech.', 'Shanghai Univ. of Finance & Economics',
  'Shanghai Univ. of Traditional Chinese Medicine', 'Shanghai Normal Univ.',
  'Shanghai Ocean Univ.', 'Shanghai Conservatory of Music', 'Kunming Univ. of Science & Tech.',
  'Yunnan Minzu Univ.', 'Yunnan Univ. of Chinese Medicine', 'Nanchang Hangkong Univ.',
  'Jiangxi Univ. of Chinese Medicine', 'Gannan Normal Univ.', 'Jimei University',
  'Fuzhou Univ. of Intl. Studies & Trade', 'Quanzhou Normal Univ.', 'Fujian Univ. of Technology',
  'Sichuan Agricultural Univ.', 'Chengdu Univ. of Information Tech.', 'Sichuan Univ. of Science & Engineering',
  'Southwest Univ. of Political Science & Law', 'Guizhou Minzu Univ.',
  'Henan Polytechnic Univ.', 'Xinyang Normal Univ.', 'Zhengzhou Univ. of Light Industry',
  'Hunan Univ. of Science & Tech.', 'Hunan Univ. of Technology', 'Central South Univ. of Forestry & Tech.',
  'CEIBS - China Europe Intl. Business School', 'Beijing Univ. of International Business',
  'Beijing Univ. of Civil Engineering', 'Beijing Institute of Fashion Technology',
  'Central Academy of Fine Arts', 'Central Academy of Drama', 'China Conservatory of Music',
];

export default function Universities() {
  const allRow1 = [...row1, ...row1];
  const allRow2 = [...row2, ...row2];

  return (
    <section id="universites" className="bg-white py-20 overflow-hidden">
      <SectionWrapper>
        <SectionTitle
          title="300+ Universités Partenaires en Chine"
          subtitle="Des établissements d'excellence dans toutes les provinces chinoises"
        />

        {/* Stats */}
        <div className="flex justify-center gap-8 mb-10 flex-wrap">
          {[
            { value: '300+', label: 'Universités partenaires' },
            { value: '31', label: 'Provinces couvertes' },
            { value: '50+', label: 'Filières disponibles' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-[#1A3A8F]">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Featured universities — cartes cliquables */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {featuredUniversities.map((uni, i) => (
            <UniversityCard
              key={uni.name}
              name={uni.name}
              city={uni.city}
              rank={uni.rank}
              specialties={uni.specialties}
              slug={uni.slug}
              index={i}
            />
          ))}
        </div>

        {/* Lien vers toutes les fiches */}
        <div className="text-center mb-10">
          <Link
            href="/universites"
            className="inline-flex items-center gap-2 text-[#1A3A8F] font-semibold text-sm border border-[#1A3A8F] px-5 py-2.5 rounded-xl hover:bg-[#1A3A8F] hover:text-white transition-all duration-200"
          >
            Voir toutes les fiches universités →
          </Link>
        </div>
      </SectionWrapper>

      {/* Scrolling ticker */}
      <div className="mt-4 space-y-3">
        <div className="flex overflow-hidden">
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {allRow1.map((name, i) => (
              <span key={i} className="inline-block bg-[#EEF3FF] text-[#1A3A8F] text-xs font-medium px-3 py-1.5 rounded-full border border-[#1A3A8F]/10 shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex gap-3 animate-marquee-reverse whitespace-nowrap">
            {allRow2.map((name, i) => (
              <span key={i} className="inline-block bg-[#FFF8ED] text-[#E8931A] text-xs font-medium px-3 py-1.5 rounded-full border border-[#E8931A]/20 shrink-0">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
