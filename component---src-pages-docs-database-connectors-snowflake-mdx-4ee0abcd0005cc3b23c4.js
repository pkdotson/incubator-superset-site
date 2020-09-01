(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{emkg:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n("wx14"),o=n("zLVn"),r=(n("q1tI"),n("7ljp")),s=n("hhGP"),i=(n("qKvR"),{});void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/pages/docs/Database Connectors/snowflake.mdx"}});var c={_frontmatter:i},l=s.a;function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)(l,Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"snowflake"},"Snowflake"),Object(r.b)("p",null,"The connection string for Snowflake looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"snowflake://{user}:{password}@{account}.{region}/{database}?role={role}&warehouse={warehouse}\n")),Object(r.b)("p",null,"The schema is not necessary in the connection string, as it is defined per table/query. The role and warehouse can be omitted if defaults are defined for the user, i.e."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"snowflake://{user}:{password}@{account}.{region}/{database}\n")),Object(r.b)("p",null,"Make sure the user has privileges to access and use all required databases/schemas/tables/views/warehouses, as the Snowflake SQLAlchemy engine does not test for user/role rights during engine creation by default. However, when pressing the “Test Connection” button in the Create or Edit Database dialog, user/role credentials are validated by passing “validate_default_parameters”: True to the connect() method during engine creation. If the user/role is not authorized to access the database, an error is recorded in the Superset logs."))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/pages/docs/Database Connectors/snowflake.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-docs-database-connectors-snowflake-mdx-4ee0abcd0005cc3b23c4.js.map