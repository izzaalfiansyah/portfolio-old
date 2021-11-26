<script>
    import { Router, Route } from 'svelte-navigator'

    // components
    import Navbar from './components/Navbar.svelte'
    import Footer from './components/Footer.svelte'

    // pages
    import Starter from './Starter.svelte'
    import Project from './Project.svelte'
    import ProjectDetail from './ProjectDetail.svelte'
    import Blog from './Blog.svelte'
    import BlogDetail from './BlogDetail.svelte'
    import Gallery from './Gallery.svelte'
</script>

<Navbar />

<div class="max-w-5xl flex items-center min-h-screen flex-wrap mx-auto my-10">
    <Router primary={false}>
        <Route path="/">
            <Starter />
        </Route>
        <Route path="/project">
            <Project />
        </Route>
        <Route path="/project/:id" let:params>
            <ProjectDetail id={params.id} />
        </Route>
        <Route path="/blog">
            <Blog />
        </Route>
        <Route path="/blog/:id" let:params>
            <BlogDetail id={params.id} />
        </Route>
        <Route path="/gallery">
            <Gallery />
        </Route>
    </Router>
</div>

<Footer />