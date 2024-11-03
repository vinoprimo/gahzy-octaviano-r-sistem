/// <reference types="vite/client" />
declare module '*.vue' {
    import Vue from 'vue';
    export default Vue;
  }
  
  declare module '@/components/Blog/BlogPosts.vue' {
    import { DefineComponent } from 'vue';
    const BlogPosts: DefineComponent<{}, {}, any>;
    export default BlogPosts;
  }
  
  declare module '@/components/Blog/Categories.vue' {
    import { DefineComponent } from 'vue';
    const Categories: DefineComponent<{}, {}, any>;
    export default Categories;
  }
  
  declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
  declare module '@/components/BlogPost/ArticleSection.vue' {
    import { DefineComponent } from 'vue';
    const ArticleSection: DefineComponent<{}, {}, any>;
    export default ArticleSection;
  }
  
  declare module '@/components/BlogPost/AuthorInfo.vue' {
    import { DefineComponent } from 'vue';
    const AuthorInfo: DefineComponent<{}, {}, any>;
    export default AuthorInfo;
  }
  
  declare module '@/components/BlogPost/BulletPoints.vue' {
    import { DefineComponent } from 'vue';
    const BulletPoints: DefineComponent<{}, {}, any>;
    export default BulletPoints;
  }
  
  declare module '@/components/BlogPost/RelatedArticles.vue' {
    import { DefineComponent } from 'vue';
    const RelatedArticles: DefineComponent<{}, {}, any>;
    export default RelatedArticles;
  }
  
  declare module '@/components/BlogPost/JoinTeamSection.vue' {
    import { DefineComponent } from 'vue';
    const JoinTeamSection: DefineComponent<{}, {}, any>;
    export default JoinTeamSection;
  }
  