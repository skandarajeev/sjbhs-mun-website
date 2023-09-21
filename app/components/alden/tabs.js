
import { useState } from "react"
import style from "./styles.module.css"
import alden from "../../media/alden.jpg"
import { motion, AnimatePresence } from "framer-motion"
const allIngredients = [
    { icon: "", label: "Letter", 
    
    content: 
    <div className=""> 
      <h1 className="font-medium mb-[10px]">Dear delegates and faculty advisors,</h1>
      <p className="mb-[10px]">It is my very great pleasure to invite you to the 11th edition of the St. Joseph's Boys' High School Model United Nations.

          SJBHSMUN has earned a distinguished reputation for fostering effective discourse, critical thinking, and diplomacy among the world's future leaders. As we prepare to embark on yet another unforgettable journey of diplomacy and debate, I want to share with you the essence of our MUN conference and the venerable institution that hosts 

          When you choose to participate in SJBHSMUN, you are not just attending another conference, you are joining a tradition of excellence. Our conference is a platform where students from diverse backgrounds and cultures come together to discuss, debate, and resolve global issues. It is an opportunity to engage in discourse and develop essential skills such as negotiation, public speaking, and critical thinking.

          At SJBHSMUN this year, we offer to you meticulously crafted committees to provide a challenging and immersive experience. You will find yourself in the shoes of diplomats, tackling real-world problems, and seeking solutions through diplomacy and compromise. This is not just a simulation; it's a chance to develop a deeper understanding of global affairs and international relations.

          I fondly remember my own time at SJBHS and how it shaped my individuality. The friendships formed, the knowledge gained, and the unforgettable memories created during those conferences have had a profound impact on my life. It is my hope that you too will have similar experiences and take away valuable lessons that will serve you well in your future 
      </p>
      <h2 className="font-medium">
      The Secretariat and I eagerly await your presence at #27 Museum Road in October!
      </h2>
    </div>
     },
    { icon: "", label: "Advice", content:"Boom!" },
    { 
      icon: "",
     label: "About", 
     content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus eu libero maximus aliquam. Fusce suscipit semper nulla, quis finibus mi vestibulum non. Praesent nec bibendum odio. Sed interdum diam nec quam fringilla, ac tristique arcu dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In tincidunt malesuada libero vel interdum. Vestibulum volutpat viverra lacus a tincidunt. Quisque suscipit lorem vel leo aliquam, id faucibus tellus lobortis. Vivamus et dolor sed justo pharetra convallis a ut ligula. Suspendisse fringilla ullamcorper mauris, id scelerisque velit. Proin eget velit vel arcu elementum convallis non vel erat. Aenean in purus et tellus ultricies pulvinar. Sed dapibus nunc nec dictum fermentum." },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
  ]
  
  const [tomato, lettuce, cheese] = allIngredients
  const tabs = [tomato, lettuce, cheese]
  
  
  
  function getNextIngredient(ingredients) {
    const existing = new Set(ingredients)
    return allIngredients.find(ingredient => !existing.has(ingredient))
  }
  
export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(tabs[0])

  return (
    <div className={`${style.window} w-[100%] md:w-[100%] shadow-lg shadow-teal-600`}>
      <nav className={style.nav}>
        <ul className={style.ul}> 
          {tabs.map(item => (
            <li
              key={item.label}
              className={style.ul} 
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className={style.main}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}

            className = {`  text-[0.9rem] md:text-[1rem] leading-[1.8rem] md:leading-[1.8rem] `}
          >
            {selectedTab ? selectedTab.content : "😋"}
           
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
