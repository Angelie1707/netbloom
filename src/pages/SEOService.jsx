import { Breadcrumbs, Button, Grid, Typography } from '@mui/material';
import React from 'react'
import { Helmet } from 'react-helmet';
import "../assets/css/blog.scss";
import "../assets/css/seo.scss";
import projectsupport from '../assets/icons/projectsupport.png'
import consultancy from '../assets/icons/consultancy.png'
import ongoing from '../assets/icons/ongoing.png'
import browser from '../assets/icons/browser.png'
import target from '../assets/icons/target.png'
import contentmanagement from '../assets/icons/content-management.png'
import seo from '../assets/icons/seo.png'
import ecommerce from '../assets/icons/ecommerce.png'
import link from '../assets/icons/ecommerce.png'
import statistics from '../assets/icons/statistics.png'
import wrench from '../assets/icons/wrench.png'
import search from '../assets/icons/search.png'
import developing from '../assets/icons/developing.png'


const SEOService = () => {
  document.body.classList.remove(
    "home",
    "single-blog",
    "case-study",
    "main-case-study",
    "single-case-study"
  );
  document.body.classList.add("seo", "main-blog");
  return (
    <div className='seo page-content'>
      <Helmet>
        <title>SEO Services NZ | Search Engine Optimisation | Netbloom</title>
        <meta name="robots" content="index" />
        <meta name="description" content="" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />
        <meta property="og:image" content="" />
      </Helmet>
      <div className="banner">
        <div className="banner-overlay">
          <div className="main-content">
            <div className="banner-con">
              <h1>SEO Agency in New Zealand</h1>
              <Breadcrumbs
                aria-label="breadcrumb"
                separator="›"
                className="breadcrumb"
              >

                <Typography color="text.primary">Netbloom is a digital marketing company in New Zealand that works on delivering results-driven SEO services. To provide custom-made SEO service to help your business rank highly for your business’ targeted search results.
                  To better understand our client’s priorities, we focus on working closely together to frame a unique SEO package tailored to meet your objectives. And to help your company improve its search engine visibility, targeting key elements that will scale your website’s traffic.</Typography>
              </Breadcrumbs>
            </div>
          </div>
        </div>
      </div>
      <div className='default-sec main-wrapper'>
        <Grid container spacing={2}>
          <Grid item xs={6} className="text-grid">
            <h3>Our Services</h3>
            <Typography className='text'>Netbloom is a team of SEO professionals helping website owners build, grow and maintain their online presence. Our SEO approach is based on a long-term and data-led strategy, the latest search engine guidelines, and our own experience of what generates traffic and leads to higher rankings. Learn more about Netbloom and what our team of SEO specialists can do for your website’s development. You can email us or contact us to discuss how we can help you.</Typography>
            <button className='gradientButton1 btn text-btn desktop'>Get in touch</button>
          </Grid>
          <Grid item xs={6}>
            <img src='https://netbloom.co.nz/wp-content/uploads/2022/08/1463.webp' />
          </Grid>
        </Grid>
        <Grid container spacing={6} className="text-point">
          <Grid item xs={6} className="inner-text-point-left" >
            <h3>1.</h3>
            <Typography variant="h4" className='text'>Keywords Research and Strategy</Typography>
            <Typography className='text'>At Netbloom, we want our clients to take ownership of their SEO strategy. They can be as involved in the planning as they want and set goals for us to accomplish. We will then utilise our keyword research expertise and create an optimised strategy best suited to their needs.</Typography>

          </Grid>
          <Grid item xs={6} className="inner-text-point-right">
            <h3>2.</h3>
            <Typography variant="h4" className='text'>Technical SEO</Typography>
            <Typography className='text'>For your website to rank well, it should be error-free with a fast loading speed. You don’t want your customers to keep waiting and lose them. Netbloom starts with an initial technical SEO audit followed by an analysis of user experience to identify problem areas if present. If a campaign is not user-friendly, it will not perform well on the search engine results pages.</Typography>
          </Grid>
          <Grid item xs={6} className="inner-text-point-left" >
            <h3>3.</h3>
            <Typography variant="h4" className='text'>On-site Optimisation</Typography>
            <Typography className='text'>To get organic search visibility, you must create optimised content that search engines can easily index. The contents should also answer potential customers’ questions by creating bullet points, headings, and bold text to better understand what you are trying to say.</Typography>

          </Grid>
          <Grid item xs={6} className="inner-text-point-right">
            <h3>4.</h3>
            <Typography variant="h4" className='text'>Link Building and Digital PR</Typography>
            <Typography className='text'>We are here to help you secure coverage and get backlinks from other platforms to boost your SEO efforts further. Our SEO team will try to find the right outlets for your publications. There is no need to reinvent your content – we will do it on your behalf.</Typography>
          </Grid>
          <Grid item xs={6} className="inner-text-point-left" >
            <h3>5.</h3>
            <Typography variant="h4" className='text'>Ecommerce SEO</Typography>
            <Typography className='text'>Ecommerce SEO is a unique kind of SEO that focuses on using search engine results pages (SERPs) to help your online store grow. Our team at Netbloom has an in-depth understanding of e-commerce SEO. We can help you reach new clients and generate more sales by customising an SEO strategy to meet industry-specific requirements.</Typography>

          </Grid>
          <Grid item xs={6} className="inner-text-point-right">
            <h3>6.</h3>
            <Typography variant="h4" className='text'>International SEO</Typography>
            <Typography className='text'>International SEO is an intricate field in the SEO sphere, and it requires careful planning and technical know-how of content and configurations. It would help if you designed a market-specific plan for your website to meet customer needs and keep track of your stats to ensure all traffic is coming from the right places. We can help you reach your goals by improving your website performance. We can help you with a multiverse of SEO challenges. We have everything if you need project support, consultancy, project management, or hands-on implementation.</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6} className="text-point support_wp">
          <Grid item xs={12} className="inner-text-point-left" >
            <h3>We can support you with our Holistic SEO approach to move the needle for your company forward</h3>
            <Typography className='text'>Whether you are looking for a short term or one-off SEO project, consultancy, or long-term SEO support, we can support you different SEO services that you need.</Typography>
          </Grid>
          <Grid item xs={6} className="inner-text-point-left One_off_project" >
            <h3>One-off Project Support</h3>
            <Typography className='text'>If you do not have the resources, we can provide you with the needed assistance to complete your project. We offer technical SEO support and conduct audits for your organisation, irrespective of size. Besides, we help rebuild your website or update it. Our team has experience working with many clients, with an impressive track record of success.</Typography>
            <button className='gradientButton1 btn btn_support desktop'>In need of an audit</button>
          </Grid>
          <Grid item xs={6} className="inner-text-point-right">
            <img className='maximg_seo' src={projectsupport} />
          </Grid>
          <Grid item xs={6} className="inner-text-point-right right_img_provide">
            <img className='maximg_seo' src={consultancy} />
          </Grid>
          <Grid item xs={6} className="inner-text-point-left seo_consultancy" >
            <h3>SEO Consultancy</h3>
            <Typography className='text'>Do you want to know whether the strategy employed by your in-house team is working or not? Let our SEO experts help you better understand your in-house team’s work. We will serve as your outside perspective and give you our unbiased opinion.</Typography>
            <button className='gradientButton1 btn btn_support desktop'>In need of a consultant</button>
          </Grid>
          <Grid item xs={6} className="inner-text-point-left One_off_project" >
            <h3>Ongoing Support and Implementation</h3>
            <Typography className='text'>SEO changes are fast-paced, making it harder to keep up with the latest trends. We can handle all your technical analysis and development needs while you focus on more pressing matters you need to do.</Typography>
            <button className='gradientButton1 btn btn_support desktop'>In need of a support</button>
          </Grid>
          <Grid item xs={6} className="inner-text-point-right">
            <img className='maximg_seo' src={ongoing} />
          </Grid>
        </Grid>
        <Grid container spacing={6} className="text-point common_wp">
          <Grid item xs={12} className="inner-text-point-left" >
            <h3>Why choose Netbloom?</h3>
            <Typography className='text_common'>One common issue raised by our clients is their desire to increase their website traffic through search engine optimisation. Whereas some do not know how to begin, some clients do not know what SEO is.</Typography>
            <Typography className='text_common'>Regardless of our client’s knowledge about SEO, the first step we will take is a complete technical analysis of their website. We need to know the issues that need to be addressed. From there, we can start scaling your ranking for your desired keywords.</Typography>
            <Typography className='text_common'>Netbloom will give you any kind of assistance you will require, big or small; we are here to offer solutions to your problems. We will be upfront and discuss the current state of your SEO practices. Any issues affecting your website performance that we can find during our analysis will be coursed to you, and find ways to fix them as soon as possible.</Typography>
            <Typography className='text_common'>Working on SEO is not without risks. Hence, we ensure that your business is fully aware of the impact of uncertain targets or time-sensitive projects. We want you to be well-informed, and we are always happy to explain our work—from beginning to end.</Typography>
          </Grid>
        </Grid>
        <Grid container spacing={6} className="text-point grow_businesses">
          <Grid item xs={12} className="grow_title inner-text-point-left" >
            <h3>How We Grow Businesses</h3>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={browser} />
              </div>
              <div className='grow_name'>
                <h4>Competitor Assessment</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={target} />
              </div>
              <div className='grow_name'>
                <h4>Target Market Analysis</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={browser} />
              </div>
              <div className='grow_name'>
                <h4>Traffic Analytics</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={ongoing} />
              </div>
              <div className='grow_name'>
                <h4>Content Topic Ideation</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={contentmanagement} />
              </div>
              <div className='grow_name'>
                <h4>Content Creation</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={projectsupport} />
              </div>
              <div className='grow_name'>
                <h4>Content Creation</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={seo} />
              </div>
              <div className='grow_name'>
                <h4>Custom SEO strategy</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={ecommerce} />
              </div>
              <div className='grow_name'>
                <h4>Custom SEO strategy</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={seo} />
              </div>
              <div className='grow_name'>
                <h4>Local SEO</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={link} />
              </div>
              <div className='grow_name'>
                <h4>Link Building</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={statistics} />
              </div>
              <div className='grow_name'>
                <h4>Dashboard reporting</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={wrench} />
              </div>
              <div className='grow_name'>
                <h4>Monthly updates</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={search} />
              </div>
              <div className='grow_name'>
                <h4>Keyword Research</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={developing} />
              </div>
              <div className='grow_name'>
                <h4>Website audit</h4>
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="grow_list" >
            <div className='grow_inner'>
              <div className='grow_icon'>
                <img src={statistics} />
              </div>
              <div className='grow_name'>
                <h4>Technical analysis</h4>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default SEOService