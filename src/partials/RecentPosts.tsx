import {
  BlogGallery,
  GradientText,
  IFrontmatter,
  MarkdownInstance,
  Section,
} from "astro-boilerplate-components";

type IRecentPostProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPost = (props: IRecentPostProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
          Recent <GradientText>Posts</GradientText>
        </div>

        <div className="text-sm">
          <a href="/posts">View all Posts</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPost };
