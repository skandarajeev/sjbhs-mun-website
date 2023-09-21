
import { useState } from "react"
import style from "./styles.module.css"
import alden from "../../media/alden.jpg"
import { motion, AnimatePresence } from "framer-motion"
const allIngredients = [
  { icon: "", label: "Letter", content: "The" },
  { icon: "", label: "Advice", content: "Boom!" },
  {
    icon: "",
    label: "About",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget lectus eu libero maximus aliquam. Fusce suscipit semper nulla, quis finibus mi vestibulum non. Praesent nec bibendum odio. Sed interdum diam nec quam fringilla, ac tristique arcu dignissim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In tincidunt malesuada libero vel interdum. Vestibulum volutpat viverra lacus a tincidunt. Quisque suscipit lorem vel leo aliquam, id faucibus tellus lobortis. Vivamus et dolor sed justo pharetra convallis a ut ligula. Suspendisse fringilla ullamcorper mauris, id scelerisque velit. Proin eget velit vel arcu elementum convallis non vel erat. Aenean in purus et tellus ultricies pulvinar. Sed dapibus nunc nec dictum fermentum."
  },
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
    <div className={`${style.window} w-[100%] md:w-[100%]`}>
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

            className={`  text-[0.9rem] md:text-[1rem] leading-[1.8rem] md:leading-[1.8rem] `}
          >
            {selectedTab ? selectedTab.content : "😋"}

          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
