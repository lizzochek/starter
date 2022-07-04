<template>
  <v-app>
    <v-main>
      <div>
        <div class="d-flex">
          <header>Hi. I'm a header</header>
          <nav>
            <ul>
              <li>
                <a href="https://github.com/lizzochek">Github</a>
              </li>
              <li>
                <a href="https://t.me/elisaster">Telegram</a>
              </li>
              <li>
                <router-link to="/login">Login</router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="d-grid">
          <div class="content">
            <section>
              <v-img id="book_img" alt="image" src="../assets/mikolaj-DCzpr09cTXY-unsplash.jpg" />
            </section>
            <article>
              <h2>Benefits of reading books</h2>
              <h3>Reading strengthens your brain</h3>

              <p>
                <!-- eslint-disable-next-line -->
                A growing body of research indicates that reading literally changes your mind.
                <!-- eslint-disable-next-line -->
                Using MRI scans, researchers have confirmedTrusted Source that reading involves a
                complex network of circuits and signals in the brain. As your reading ability
                matures, those networks also get stronger and more sophisticated.
                <!-- eslint-disable-next-line -->
                In one studyTrusted Source conducted in 2013, researchers used functional MRI scans
                to measure the effect of reading a novel on the brain. Study participants read the
                novel “Pompeii” over a period of 9 days. As tension built in the story, more and
                more areas of the brain lit up with activity.
                <!-- eslint-disable-next-line -->
                Brain scans showed that throughout the reading period and for days afterward, brain
                connectivity increased, especially in the somatosensory cortex, the part of the
                brain that responds to physical sensations like movement and pain.
              </p>
              <h3>Increases your ability to empathize</h3>
              <p>
                <!-- eslint-disable-next-line -->
                And speaking of sensing pain, researchTrusted Source has shown that people who read
                literary fiction — stories that explore the inner lives of characters — show a
                heightened ability to understand the feelings and beliefs of others.
                <!-- eslint-disable-next-line -->
                Researchers call this ability the “theory of mind,” a set of skills essential for
                building, navigating, and maintaining social relationships.
                <!-- eslint-disable-next-line -->
                While a single session of reading literary fiction isn’t likely to spark this
                feeling, researchTrusted Source shows that long-term fiction readers do tend to have
                a better-developed theory of mind.
              </p>
              <h3>Helps prevent age-related cognitive decline</h3>
              <p>
                <!-- eslint-disable-next-line -->
                The National Institute on AgingTrusted Source recommends reading books and magazines
                as a way of keeping your mind engaged as you grow older.
                <!-- eslint-disable-next-line -->
                Although research hasn’t proven conclusively that reading books prevents diseases
                like Alzheimer’s, studiesTrusted Source show that seniors who read and solve math
                problems every day maintain and improve their cognitive functioning.
                <!-- eslint-disable-next-line -->
                And the earlier you start, the better. A 2013 study conducted by Rush University
                Medical Center found that people who’ve engaged in mentally stimulating activities
                all their lives were less likely to develop the plaques, lesions, and tau-protein
                tangles found in the brains of people with dementia.
                <!-- eslint-disable-next-line -->
              </p>
            </article>
          </div>
          <aside>
            <h3>Here's some aside info</h3>
            <p>
              A book is a medium for recording information in the form of writing or images,
              typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound
              together and protected by a cover. The technical term for this physical arrangement is
              codex (plural, codices). In the history of hand-held physical supports for extended
              written compositions or records, the codex replaces its predecessor, the scroll. A
              single sheet in a codex is a leaf and each side of a leaf is a page. As an
              intellectual object, a book is prototypically a composition of such great length that
              it takes a considerable investment of time to compose and still considered as an
              investment of time to read. In a restricted sense, a book is a self-sufficient section
              or part of a longer composition, a usage reflecting that, in antiquity, long works had
              to be written on several scrolls and each scroll had to be identified by the book it
              contained. Each part of Aristotle's Physics is called a book. In an unrestricted
              sense, a book is the compositional whole of which such sections, whether called books
              or chapters or parts, are parts. The intellectual content in a physical book need not
              be a composition, nor even be called a book. Books can consist only of drawings,
              engravings or photographs, crossword puzzles or cut-out dolls. In a physical book, the
              pages can be left blank or can feature an abstract set of lines to support entries,
              such as in an account book, an appointment book, an autograph book, a notebook, a
              diary or a sketchbook. Some physical books are made with pages thick and sturdy enough
              to support other physical objects, like a scrapbook or photograph album. Books may be
              distributed in electronic form as ebooks and other formats.
            </p>
          </aside>
        </div>
        <footer>
          <p>This webpage was made by <a href="https://github.com/lizzochek">Liza</a></p>
        </footer>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
#book_img {
  width: 500px;
}

body {
  font-family: Georgia;
}

// a container
.d-flex {
  // saying it's a container
  display: flex;
  // the content of children doesn't go out
  flex-wrap: wrap;
  height: 100%;
}

header {
  @include top-el-style();
  padding: 5px;
  font-size: 30px;
  color: #f2f2f2;
}

nav {
  @include top-el-style();
  overflow: hidden;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 15px;
    li,
    .router-link {
      display: inline;
      font-size: 17px;
      a {
        color: #f2f2f2;
        text-decoration: none;
        padding: 15px;
      }
    }
  }
}

.d-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;

  grid-area: 2/1/3/2;
  background: #c4b8b8;
  padding: 15px;
}

aside {
  background: #fac5c5;
  grid-area: 2/2/3/3;
}

footer {
  background: #c78d8d;
  text-align: center;
  margin-top: 20px;
}
</style>
